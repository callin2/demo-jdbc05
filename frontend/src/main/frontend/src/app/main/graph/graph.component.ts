import { Component, NgZone, ViewChild, HostBinding, AfterViewInit, ElementRef, OnInit, Input, OnDestroy, AfterContentChecked } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdAutocompleteTrigger } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';

import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { WindowRefService } from '../../../services/window-ref.service';
import { AgensApiService } from '../../../services/agens-api.service';
import { DialogsService } from '../../../services/dialogs.service';

import { AgensRequestQuery } from '../../../models/agens-request-query';
import { AgensResponseMetaDb, AgensResponseMetaGraph, AgensResponseMetaLabel } from '../../../models/agens-response-meta';
import { AgensResponseResult, AgensResponseResultMeta, AgensResponseResultQuery } from '../../../models/agens-response-result';

// ** NOTE : 포함하면 AOT 컴파일 오류 떨어짐 (row detail 기능 때문에 사용)
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';


declare var $: any;
declare var CodeMirror: any;

@Component({
  selector: 'ag-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class GraphComponent implements AfterViewInit, OnInit, OnDestroy /*, AfterContentChecked */ {
  
  private route$ : Subscription;
  public project : any = null;

  window:any = null;
  graph:any = null;

  metaData: AgensResponseMetaDb = null;

  result:AgensResponseResult = null;  
  result_json:any = {};
  result_json_expand:boolean = false;
  result_table_expand:boolean = false;
  result_table_rows:any[] = [];
  result_table_columns: any[] = [];

  result_labels:any[] = [];
  result_labels_node:any[] = [];
  result_labels_edge:any[] = [];

  loading:boolean = false;
  loading_table:boolean = false;

  selectedLayoutIndex:number = 7;   // cose2 layout

  query:string =
`match path=(a:production {'title': 'Haunted House'})-[]-(b:company) 
return path 
limit 10
`;
  
  title: string = "No title"
  editor: any;
  editorRef: any;

  graContentHeight:number = 450;
  initWindowHeight:number;

  toggleDivSave: boolean = false;
  projId: number = 0;
  projTitle: string = "";
  projDescription: string = "";

  // style settings
  node_labels = [];
  edge_labels = [];
  setting: any = {};
  setting_default: any = { 
    nodeSelector: 'all',
    nodeStyle: {
        'label': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'text-outline-color': '#222',
        'background-color': '#888',
        'border-width': 0,
        'border-color': '#000',
        'shape': 'eclipse'
    },
    edgeSelector: 'all',
    edgeStyle: {
        'label': 'data(label)',
        'color': 'black',
        'text-outline-color': 'black',
        'line-color': '#B788BF',
        'line-style': 'solid',            // line-style: solid, dotted, dashed
        'width': 4,
        'curve-style': 'bezier',          // curve-style: haystack, bezier, unbundled-bezier, segments
        'target-arrow-shape': 'triangle', // shape: tee, triangle, triangle-tee, triangle-cross, triangle-backcurve, square, circle, diamond, or none
        'target-arrow-color': '#B788BF',
        'source-arrow-shape': 'none',     // shape: tee, triangle, triangle-tee, triangle-cross, triangle-backcurve, square, circle, diamond, or none
        'source-arrow-color': 'black'
    } 
  };

  // ** NOTE : 포함하면 AOT 컴파일 오류 떨어짐 (offset 지정 기능 때문에 사용)
  @ViewChild('resultTable') resultTable: any;

  @ViewChild('settingNodeForm') settingNodeForm: FormControl;
  @ViewChild('settingEdgeForm') settingEdgeForm: FormControl;
  
  @ViewChild('divAgensGraph') divAgensGraph: ElementRef;

  constructor(
    private el: ElementRef,
    private dialogsService: DialogsService,
    private winRef: WindowRefService,
    private apiSerivce: AgensApiService,
    private _route : ActivatedRoute,
    // private router : Router,
    private _ngZone: NgZone
  ) {
    this.window = winRef.nativeWindow;    

    // prepare to call this.function from external javascript
    window['angularComponentRef'] = {
      zone: this._ngZone,
      componentFn: (value) => this.getNeighbors(value),
      component: this
    };
  }

  ngOnInit(){
    this.apiSerivce.setFunction( this.checkLoadProject );
    this.setting = Object.create(this.setting_default);

    this.initWindowHeight = window.innerHeight;
  }

  ngAfterViewInit(){
    this.toggleDivSave = false;

    // CodeMirror Editor
    this.editorRef = this.el.nativeElement.querySelector('textarea#agensQuery');
    // get mime type
    var mime = 'application/x-cypher-query';
    this.editor = CodeMirror.fromTextArea( this.editorRef, {
      mode: mime,
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      matchBrackets : true,
      autofocus: true,
      theme: 'eclipse'      
    });

    // AgensGraph Factory
    this.graph = this.window.agens.graph.graphFactory(
        this.el.nativeElement.querySelector('div#agens-graph')
      );
      
    // Cytoscape의 canvas가 영역을 전부 덮어버리기 때문에, zIndex 우선순위를 올려야 함
    this.el.nativeElement.querySelector('span#agens-graph-toolbar').style.zIndex = "9";
    // this.el.nativeElement.querySelector('md-chip-list#agens-graph-labels').style.zIndex = "9";

    if( this._route.snapshot.params.hasOwnProperty('id') ){
      console.log( `load AgensProject[${this._route.snapshot.params.id}]:`);
      this.checkLoadProject();
    }

    // load Graph Styles
    this.loadCyStyles('node');
    this.loadCyStyles('edge');
  }

  ngOnDestroy() {
    if(this.route$) this.route$.unsubscribe();
    window['angularComponentRef'] = null;
  }

  onResize(event) {
    // console.log( "window.innerHeight =", window.innerHeight, '<==', this.initWindowHeight );
    // console.log("divAgensGraph.style.height =", this.divAgensGraph.nativeElement.style.height );    
    if( window.innerHeight < this.initWindowHeight + 10 ) this.graContentHeight = 450;
  }

  // save를 위한 입력 div
  toggleSave(){
    this.toggleDivSave = !this.toggleDivSave;
  }

  loadDemoData(index){
    if( this.window.agens.graph === undefined || this.graph === undefined ) return;
    // console.log( `load SampleData(${index})` );

    // for TEST
    this.window.agens.graph.loadData( this.window.agens.graph.demoData[index] );
    // md-chip TEST
    this.result_labels = this.getLabels( this.window.agens.graph.demoData[index] );
    this.result_labels_node = this.result_labels.filter(r => r.type === 'node');
    this.result_labels_edge = this.result_labels.filter(r => r.type === 'edge');

    // load Graph Styles
    this.loadCyStyles('node');
    this.loadCyStyles('edge');

    this.graph.resize();    
  }

  resetSetting(){
    this.result_labels_node = this.result_labels.filter(r => r.type === 'node');
    this.result_labels_edge = this.result_labels.filter(r => r.type === 'edge');

    // load Graph Styles
    this.loadCyStyles('node');
    this.loadCyStyles('edge');

    // Form dirty reset
    // **ERROR: not a function 이런 함수 없다는..
    // this.settingNodeForm.markAsUntouched();
    // this.settingEdgeForm.markAsUntouched();
  }

  onChangeNodeSelector(value){
    if( value !== 'all' && this.setting.nodeSelector != value ){
      this.setting.nodeSelector = value;
      let style = this.loadCyStyles('node.'+value);
      // console.log( "changeNodeSelector()", style);
      if( !!style ) this.setting.nodeStyle = style;
      else this.setting.nodeStyle = {};
    } 
  }
  onChangeEdgeSelector(value){
    if( value !== 'all' && this.setting.edgeSelector != value ) {
      this.setting.edgeSelector = value;
      let style = this.loadCyStyles('edge.'+value);
      // console.log( "changeEdgeSelector()", style);
      if( !!style ) this.setting.edgeStyle = style;
      else this.setting.edgeStyle = {};
    }
  }

  setDefaultSetting(value){
    if( value === 'node' )
      this.setting.nodeStyle = Object.create(this.setting_default.nodeStyle);
    else 
      this.setting.edgeStyle = Object.create(this.setting_default.edgeStyle);
  }

  applySetting(){
    // **NOTE: input controller들의 ngModel 이 작동하지 않음
    // console.log( this.setting );

    // selector가 존재하면 해당 내용으로 style 추가
    if( this.setting.nodeSelector ){
      if( Object.keys(this.setting.nodeStyle).length > 0 )
        this.graph.style().selector('node.'+this.setting.nodeSelector)
          .style( this.setting.nodeStyle ).update();
    }
    // 존재하지 않으면 'node'의 기본 스타일에 반영
    else{
      this.graph.style().selector('node').style( this.setting.nodeStyle ).update();
    }

    // node와 마찬가지 방식으로 동작
    if( this.setting.edgeSelector ){
      if( Object.keys(this.setting.edgeStyle).length > 0 )
        this.graph.style().selector('edge.'+this.setting.edgeSelector)
          .style( this.setting.edgeStyle ).update();
    }
    else{
      this.graph.style().selector('edge').style( this.setting.edgeStyle ).update();
    }
  }

  loadCyStyles(selector:string){
    if( !this.graph ) return undefined;

    let styles = this.graph.style().json();
    let styles_filtered = styles.filter(s => s.selector == selector);
    if( styles_filtered.length > 0 ){
      if( selector.startsWith('node') ) {
        this.setting.nodeStyle = styles_filtered[0]['style'];
        if( !this.setting.nodeStyle.hasOwnProperty('shape') ) this.setting.nodeStyle['shape'] = 'eclipse';
      }
      else {
        this.setting.edgeStyle = styles_filtered[0]['style'];
        // if( !this.setting.edgeStyle.hasOwnProperty('shape') ) this.setting.edgeStyle['shape'] = 'eclipse';
      }
      return styles_filtered[0]['style'];
    } 
    else return undefined;
  }

  // cytoscape makeLayout & run
  changeLayout(index){
    if( this.window.agens.graph === undefined || this.graph === undefined ) return;
    this.selectedLayoutIndex = Number(index);
    let selectedLayout = this.window.agens.graph.layoutTypes[this.selectedLayoutIndex];
    // console.log( "change layout : "+selectedLayout.name );

    var layout = this.graph.makeLayout(selectedLayout);
    layout.run();
    this.graph.fit( this.graph.elements(), 50 ); // fit to all the layouts    
  }

  // stop loading sign
  stopQuery(){
    this.loading = false;
  }

  // request query to server
  requestQuery(){
    let sql:string = String(this.editor.getValue());
    this.loading = true;
    this.clearGraph();
    
    let query:AgensRequestQuery = new AgensRequestQuery( sql );
    this.apiSerivce.dbQuery(query)
      .then(data => {
        // console.log( "requestQuery(): new AgensResponseResult" );
        this.result = new AgensResponseResult(data);
        // console.log( "requestQuery(): setResultTable" );
        this.setResultTable(this.result);
        this.result_table_expand = true;

        // console.log( "requestQuery(): getCyElements" );
        let eles = this.result.getCyElements();
        this.window.agens.graph.loadData( eles );
        this.result_labels = this.getLabels( eles );

        this.loading = false;
        this.resetSetting();

        // console.log( "requestQuery(): setResultJson" );
        // 이것 때문에 테이블의 데이터가 비정상적으로 표시됨 (이유 모름)
        this.setResultJson(this.result);  
      });
  }

  getLabels( eles:any ):any[] {
    let labels = new Map<string,any>();
    for( let item of eles['nodes'] ){
      if( labels.has(item.data.label) ) labels.get(item.data.label).count += 1;
      else {
        labels.set(item.data.label, { name: item.data.label, type: 'node', count: 1 });
      }
    }
    for( let item of eles['edges'] ){
      if( labels.has(item.data.label) ) labels.get(item.data.label).count += 1;
      else {
        labels.set(item.data.label, { name: item.data.label, type: 'edge', count: 1 });
      }
    }
    let labelArray:any[] = [];
    for( let key of Array.from(labels.keys()) ){
      labelArray.push(labels.get(key) );
    }
    return labelArray;
  }

  setResultJson( result:AgensResponseResult ){
    let temp:string = JSON.stringify( result.getRows() );
    this.result_json = JSON.parse( temp );
    // console.log(this.result_json);
  }
  setResultTable( result:AgensResponseResult ){
    this.result_table_columns = result.getTableColumns();
    this.result_table_rows = result.getTableRows();
    this.resultTable.offset = 0;
  }

  // Table page event
  onTablePage(pageNumber:number) {
    // console.log(`ngx_datatable: pageNumber=${pageNumber}`);
  }
  toggleExpandRow(row, col) {
    // console.log('Toggled Expand Row!', row, col);
    row._selectedColumn = col;
    this.resultTable.rowDetail.toggleExpandRow(row);
  }
  onRowDetailToggle(event) {
    // console.log('Detail Toggled', event);   // type=row, value={row}
  }

  clearGraph(){
    this.graph.elements().remove();
    this.graph.style( this.window.agens.graph.defaultStyle ).update();

    this.result = null;
    this.result_json = {};
    this.result_json_expand = false;
    this.result_table_expand = false;
    this.result_table_columns = [];
    this.result_table_rows = [];
    this.result_labels = [];

    this.graph.resize();
  }

  newGraph() {
    this.projId= 0;
    this.projTitle = "";
    this.projDescription = "";
    
    this.query = " ";

    if( !!this.graph ) this.clearGraph();
  }

  dlgExportImage(){
    if( this.window.agens.dialog === undefined ) return;
    this.window.agens.dialog.openImageExport();
  }

  dlgExportJson(){
    if( this.window.agens.dialog === undefined ) return;
    this.window.agens.dialog.openJsonExport();
  }
  
  dlgFullScreen(){
    if( this.graph === undefined ) return;
    this.graContentHeight = 800;

    let elem = this.el.nativeElement.querySelector('#graphCard');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  cyUndo(): void{
    if( this.window.agens.api.unre === undefined ) return;
    this.window.agens.api.unre.undo();
  }
  cyRedo(): void{
    if( this.window.agens.api.unre === undefined ) return;
    this.window.agens.api.unre.redo();
  }
  cySelectLabel( labelType, labelName ){
    // console.log(`clicked md-chip: label('${labelType}', '${labelName}')`);
    this.graph.elements(':selected').unselect();
    this.graph.elements(`${labelType}[label='${labelName}']`).select();
  }

  saveProject(): void {
    let user = this.apiSerivce.dbUser();
    if( user == null ) return;

    let sql:string = String(this.editor.getValue()).trim();
    console.log( `** SAVE[${user.user_id}]: \n`+sql );
    
    let thumbnail = this.graph.png({scale : 3, full : true, bg: 'white', maxWidth: '200px', maxHeight: '100px'});

    let project:any = {
      "username": user.user_id,
      "title": this.projTitle,
      "description": this.projDescription,
      "sql": sql,
      "graph": JSON.stringify(this.graph.json()),
//      "image": String(thumbnail)
    };
    if( !!this.projId && this.projId > 0 ) project['id'] = this.projId;

    this.apiSerivce.dbSaveProject(project)
      .then(data => {
        // console.log(data);
      });
    this.toggleSave();
  }

  loadProjectGraph(projId:number){
  }

  public checkLoadProject(): void {
    this.route$ = this._route.params.subscribe(
        params => {
          if( params.hasOwnProperty('id') && params.id > 0 ){
            // console.log(params);
            this.project = params;
            this.loading = true;
          }
          else{
            this.project = null;
            return;
          }

          this.clearGraph();

          this.projId = this.project.id;
          this.projTitle = this.project.title;
          this.projDescription = this.project.description;
          this.editor.getDoc().setValue( this.project.sql );
          this.apiSerivce.dbProjectGraph(this.projId )
            .then(data => {
              // console.log( data );
              if( data !== null ){
                this.graph.json( data );
                this.graph.fit( this.graph.elements(), 50 );    
                this.graph.resize();
              }
              this.loading = false;
            });
        }
    );    
  }

  // **NOTE: 마우스의 실제 클릭 위치가 canvas와 다를 때, 교정해준다
  cyResize(){
    this.graph.style( this.window.agens.graph.defaultStyle ).update();
    this.graph.resize();
  }  

  // 특정 node의 neighbors 가져오기
  getNeighbors(vid:string){
    // console.log( "component.getNeighbors() is called: vid="+vid );
    this.apiSerivce.dbNeighbors( vid )
      .then(rows => {
        // console.log(data);
        if( !rows ) return false;

        // Async start
        this.graph.startBatch();

        let node_cnt = 0, edge_cnt = 0;
        for( let entry of rows ){
          if( entry.hasOwnProperty('node') && !!entry.node ){
            let classes = vid + ' expand';
            if( entry.hasOwnProperty('direction') ) classes += ' ' + entry.direction;
            if( entry.node.hasOwnProperty('label') ) classes += ' ' + entry.node.label;
            // console.log(entry.node.id, this.graph.getElementById( entry.node.id) );
            let dupCheck = this.graph.getElementById( entry.node.id );
            if( dupCheck && dupCheck.length == 0 ){
              this.graph.add({
                group: "nodes",
                data: entry.node,
                classes: classes
              });
              node_cnt += 1;
            }
          }
          if( entry.hasOwnProperty('edge') && !!entry.edge ){
            let classes = vid + ' expand';
            if( entry.hasOwnProperty('direction') ) classes += ' ' + entry.direction;
            if( entry.edge.hasOwnProperty('label') ) classes += ' ' + entry.edge.label;
            // console.log(entry.edge.id, this.graph.getElementById( entry.edge.id) );
            let dupCheck = this.graph.getElementById( entry.edge.id );
            if( dupCheck && dupCheck.length == 0 ){
              this.graph.add({
                group: "edges",
                data: entry.edge,
                classes: classes
              });
              edge_cnt += 1;
            }
          }
        }
        this.graph.style().selector('node.expand')
              .style( this.window.agens.graph.defaultStyle ).update();
        this.graph.style().selector('edge.expand')
              .style( this.window.agens.graph.defaultStyle ).update();
        // just use the regular qtip api but on cy elements
        this.graph.elements('.expand').qtip({
          content: function(){ 
            var name = this.data('name');
            var label = this.data('label');
            var id = this.id();
            return `id: ${id}<br>\nlabel: ${label}<br>\nname: ${name}`; 
          },
          position: {
            my: 'bottom left',  // Position my top left...
            at: 'top right', // at the bottom right of...
          },
          style: {
            classes: 'qtip-tipsy qtip-shadow qtip-rounded',
            tip: {
              width: 16,
              height: 8
            }
          }
        });

        // Async end
        this.graph.endBatch();

        console.log( `neighbors added: node_cnt=${node_cnt}, edge_cnt=${edge_cnt}`);
        this.changeLayout(this.selectedLayoutIndex);
      });
  }
}
