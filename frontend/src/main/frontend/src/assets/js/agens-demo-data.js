(function( graph, $, undefined ) { 

  // Public Property : demoData
  graph.demoData = [
  // demoData[0]
  { nodes: [
      { data: { id: 'a', label: 'vertex-A', name: 'node A', props:{ href: 'http://js.cytoscape.org#a' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'b', label: 'vertex-A', name: 'node B', props:{ href: 'http://js.cytoscape.org#b' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'c', label: 'vertex-A', name: 'node C', props:{ href: 'http://js.cytoscape.org#c' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'd', label: 'vertex-B', name: 'node D', props:{ href: 'http://js.cytoscape.org#d' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'e', label: 'vertex-B', name: 'node E', props:{ href: 'http://js.cytoscape.org#e' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'f', label: 'vertex-A', name: 'node F', props:{ href: 'http://js.cytoscape.org#f' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'g', label: 'vertex-C', name: 'node G', props:{ href: 'http://js.cytoscape.org#g' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'h', label: 'vertex-C', name: 'node H', props:{ href: 'http://js.cytoscape.org#h' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'i', label: 'vertex-C', name: 'node I', props:{ href: 'http://js.cytoscape.org#i' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'j', label: 'vertex-A', name: 'node J', props:{ href: 'http://js.cytoscape.org#j' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'k', label: 'vertex-A', name: 'node K', props:{ href: 'http://js.cytoscape.org#k' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'l', label: 'vertex-D', name: 'node L', props:{ href: 'http://js.cytoscape.org#l' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'm', label: 'vertex-D', name: 'node M', props:{ href: 'http://js.cytoscape.org#m' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'n', label: 'vertex-D', name: 'node N', props:{ href: 'http://js.cytoscape.org#n' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'o', label: 'vertex-D', name: 'node O', props:{ href: 'http://js.cytoscape.org#o' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'p', label: 'vertex-A', name: 'node P', props:{ href: 'http://js.cytoscape.org#p' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'q', label: 'vertex-F', name: 'node Q', props:{ href: 'http://js.cytoscape.org#q' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'r', label: 'vertex-F', name: 'node R', props:{ href: 'http://js.cytoscape.org#r' }}, classes: 'demo-data', selectable: true, selected: false },
    ],           
    edges: [
      { data: { id: 'ae', label: 'edge-X', name: 'edge AE', weight: 1, source: 'a', target: 'e' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'ab', label: 'edge-X', name: 'edge AB', weight: 3, source: 'a', target: 'b' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'be', label: 'edge-X', name: 'edge BE', weight: 4, source: 'b', target: 'e' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'bc', label: 'edge-X', name: 'edge BC', weight: 5, source: 'b', target: 'c' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'ce', label: 'edge-X', name: 'edge CE', weight: 6, source: 'c', target: 'e' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'cd', label: 'edge-X', name: 'edge CD', weight: 2, source: 'c', target: 'd' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'de', label: 'edge-X', name: 'edge DE', weight: 7, source: 'd', target: 'e' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'af', label: 'edge-Y', name: 'edge AF', weight: 8, source: 'a', target: 'f' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'bh', label: 'edge-Y', name: 'edge BH', weight: 7, source: 'b', target: 'h' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'bo', label: 'edge-Y', name: 'edge BO', weight: 2, source: 'b', target: 'o' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'bp', label: 'edge-Y', name: 'edge BP', weight: 3, source: 'b', target: 'p' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'br', label: 'edge-Y', name: 'edge BR', weight: 4, source: 'b', target: 'r' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'cg', label: 'edge-Y', name: 'edge CG', weight: 5, source: 'c', target: 'g' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'cj', label: 'edge-Y', name: 'edge CJ', weight: 6, source: 'c', target: 'j' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'co', label: 'edge-Y', name: 'edge CO', weight: 2, source: 'c', target: 'o' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'di', label: 'edge-Y', name: 'edge DI', weight: 7, source: 'd', target: 'i' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'dq', label: 'edge-Y', name: 'edge DQ', weight: 6, source: 'd', target: 'q' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'eh', label: 'edge-Z', name: 'edge EH', weight: 2, source: 'e', target: 'h' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'fk', label: 'edge-Z', name: 'edge FK', weight: 9, source: 'f', target: 'k' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'kl', label: 'edge-Z', name: 'edge kl', weight: 5, source: 'k', target: 'l' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'ke', label: 'edge-Z', name: 'edge KE', weight: 5, source: 'k', target: 'e' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'kn', label: 'edge-Z', name: 'edge KN', weight: 7, source: 'k', target: 'n' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'mj', label: 'edge-Z', name: 'edge MJ', weight: 1, source: 'm', target: 'j' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'na', label: 'edge-Z', name: 'edge NA', weight: 1, source: 'n', target: 'a' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'np', label: 'edge-Z', name: 'edge np', weight: 2, source: 'n', target: 'p' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'pe', label: 'edge-Z', name: 'edge PE', weight: 3, source: 'p', target: 'e' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'pf', label: 'edge-Z', name: 'edge PF', weight: 8, source: 'p', target: 'f' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'pg', label: 'edge-Z', name: 'edge PG', weight: 4, source: 'p', target: 'g' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'rk', label: 'edge-Z', name: 'edge RK', weight: 8, source: 'r', target: 'k' }, classes: 'demo-data', selectable: true, selected: false },
    ]},
    // demoData[1]
    { 
      nodes: [
      { data: { id: 'a', label: 'vertex-A', name: 'node A', props:{ href: 'http://js.cytoscape.org#a' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'a', label: 'vertex-A', name: 'node A', props:{ href: 'http://js.cytoscape.org#a' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'a', label: 'vertex-A', name: 'node A', props:{ href: 'http://js.cytoscape.org#a' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'a', label: 'vertex-A', name: 'node A', props:{ href: 'http://js.cytoscape.org#a' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'a', label: 'vertex-A', name: 'node A', props:{ href: 'http://js.cytoscape.org#a' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'a', label: 'vertex-A', name: 'node A', props:{ href: 'http://js.cytoscape.org#a' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: 'b', label: 'vertex-A', name: 'node B', props:{ href: 'http://js.cytoscape.org#b' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: '11', label: 'vertex-A', name: 'node 11', props:{ href: 'http://js.cytoscape.org#a' }}, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: '12', label: 'vertex-A', name: 'node 12', props:{ href: 'http://js.cytoscape.org#b' }}, classes: 'demo-data', selectable: true, selected: false },
      ],
      edges: [
      { data: { id: 'ab', label: 'edge-X', name: 'edge AB', weight: 1, source: 'a', target: 'b' }, classes: 'demo-data', selectable: true, selected: false },
      { data: { id: '1112', label: 'edge-X', name: 'edge 1112', weight: 1, source: '11', target: '12' }, classes: 'demo-data', selectable: true, selected: false },
      ]
    },
    // demoData[2]
    {
    "edges": [
      {
        "classes": "distributed 8.392856",
        "data": {
          "id": "8.392856",
          "label": "distributed",
          "name": "8.392856",
          "props": {},
          "source": "5.28170",
          "target": "4.3383466"
        },
        "group": "edges",
        "locked": false,
        "position": {},
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "produced 9.398709",
        "data": {
          "id": "9.398709",
          "label": "produced",
          "name": "9.398709",
          "props": {},
          "source": "5.28170",
          "target": "4.3383466"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "position": {},
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "distributed 8.1660262",
        "data": {
          "id": "8.1660262",
          "label": "distributed",
          "name": "8.1660262",
          "props": {},
          "source": "5.86838",
          "target": "4.3391181"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "position": {},
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "produced 9.2262633",
        "data": {
          "id": "9.2262633",
          "label": "produced",
          "name": "9.2262633",
          "props": {},
          "source": "5.86838",
          "target": "4.3391181"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "position": {},
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "produced 9.662599",
        "data": {
          "id": "9.662599",
          "label": "produced",
          "name": "9.662599",
          "props": {},
          "source": "5.248251",
          "target": "4.3394553"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "position": {},
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "produced 9.2485932",
        "data": {
          "id": "9.2485932",
          "label": "produced",
          "name": "9.2485932",
          "props": {},
          "source": "5.34997",
          "target": "4.3397690"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "position": {},
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "produced 9.1911970",
        "data": {
          "id": "9.1911970",
          "label": "produced",
          "name": "9.1911970",
          "props": {},
          "source": "5.69140",
          "target": "4.3398121"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "position": {},
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "distributed 8.965184",
        "data": {
          "id": "8.965184",
          "label": "distributed",
          "name": "8.965184",
          "props": {},
          "source": "5.3494",
          "target": "4.7058"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "position": {},
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "produced 9.5",
        "data": {
          "id": "9.5",
          "label": "produced",
          "name": "9.5",
          "props": {},
          "source": "5.147917",
          "target": "4.7058"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "position": {},
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "distributed 8.1465218",
        "data": {
          "id": "8.1465218",
          "label": "distributed",
          "name": "8.1465218",
          "props": {},
          "source": "5.15265",
          "target": "4.465225"
        },
        "grabbable": true,
        "group": "edges",
        "locked": false,
        "position": {},
        "removed": false,
        "selectable": true,
        "selected": false
      }
    ],
    "nodes": [
      {
        "classes": "production 4.3383466",
        "data": {
          "_order": "start",
          "id": "4.3383466",
          "label": "production",
          "name": "Haunted House",
          "props": {
            "alternate_titles": [
              {
                "aka_title": "Your True Adventures (1938-1939 season) #10: Haunted House",
                "kind": "movie",
                "md5sum": "e2b23a4f18ce3f9164c470a04597b083",
                "note": "(USA) (series title)",
                "phonetic_code": "Y6363",
                "production_year": 1939
              }
            ],
            "full_info": [
              {
                "trivia": "Vitaphone Production Reel #B156."
              },
              {
                "plot": "This edition of Vitaphone's \"Your True Adventure\" has Floyd Gibbons relating the story of two young girls who, while waiting on a bus, enter an abandoned house where an escaped convict is hiding, and he locks them up in a room. After the convict leaves, one of the girls is injured when she falls through a decayed floor into the cellar, and the second girl nurses her through a terrifying night."
              },
              {
                "color info": "Black and White"
              },
              {
                "countries": "USA"
              },
              {
                "genres": "Adventure"
              },
              {
                "genres": "Crime"
              },
              {
                "genres": "Short"
              },
              {
                "languages": "English"
              },
              {
                "runtimes": "12"
              },
              {
                "sound mix": "Mono"
              },
              {
                "tech info": "MET:330 m"
              },
              {
                "tech info": "OFM:35 mm"
              },
              {
                "tech info": "PCS:Spherical"
              },
              {
                "tech info": "PFM:35 mm"
              },
              {
                "tech info": "RAT:1.37 : 1"
              },
              {
                "release dates": "USA:3 June 1939"
              }
            ],
            "id": 3331917,
            "kind": "movie",
            "md5sum": "5c6c06585166bc291d09c63105631aec",
            "phonetic_code": "H532",
            "production_year": 1939,
            "title": "Haunted House"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "position": {
          "x": 161,
          "y": 100
        },
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.28170",
        "data": {
          "_order": "end",
          "id": "5.28170",
          "label": "company",
          "name": "Warner Bros.",
          "props": {
            "country_code": "[us]",
            "id": 1355,
            "md5sum": "014584dc71656c7a48222cdef719a123",
            "name": "Warner Bros.",
            "name_pcode_nf": "W6561",
            "name_pcode_sf": "W6561"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "position": {
          "x": 483,
          "y": 100
        },
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "production 4.3391181",
        "data": {
          "_order": "start",
          "id": "4.3391181",
          "label": "production",
          "name": "Haunted House",
          "props": {
            "full_info": [
              {
                "countries": "USA"
              },
              {
                "genres": "Family"
              },
              {
                "genres": "Horror"
              },
              {
                "genres": "Mystery"
              },
              {
                "languages": "English"
              },
              {
                "release dates": "USA:1 May 1972"
              }
            ],
            "id": 3331920,
            "kind": "video game",
            "md5sum": "118d8caf2669355e3f3f7d5612fa0656",
            "phonetic_code": "H532",
            "production_year": 1972,
            "title": "Haunted House"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "position": {
          "x": 805,
          "y": 100
        },
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.86838",
        "data": {
          "_order": "end",
          "id": "5.86838",
          "label": "company",
          "name": "Magnavox",
          "props": {
            "id": 31927,
            "md5sum": "fb4d1406108c5aa244502782a6970b88",
            "name": "Magnavox",
            "name_pcode_nf": "M2512"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "position": {
          "x": 1127,
          "y": 100
        },
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "production 4.3394553",
        "data": {
          "_order": "start",
          "id": "4.3394553",
          "label": "production",
          "name": "Haunted House",
          "props": {
            "full_info": [
              {
                "budget": "$1,400"
              },
              {
                "color info": "Color"
              },
              {
                "countries": "USA"
              },
              {
                "genres": "Horror"
              },
              {
                "genres": "Short"
              },
              {
                "languages": "English"
              },
              {
                "runtimes": "USA:11"
              },
              {
                "sound mix": "Stereo"
              },
              {
                "tech info": "RAT:1.85 : 1"
              },
              {
                "release dates": "USA:19 February 2009"
              },
              {
                "release dates": "USA:21 May 2009"
              },
              {
                "release dates": "USA:24 May 2009"
              },
              {
                "taglines": "Thank God it's make-believe..."
              }
            ],
            "id": 3331924,
            "kind": "movie",
            "md5sum": "f46f3bc0783bd29cba26872f305d3421",
            "phonetic_code": "H532",
            "production_year": 2009,
            "title": "Haunted House"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "position": {
          "x": 1449,
          "y": 100
        },
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.248251",
        "data": {
          "_order": "end",
          "id": "5.248251",
          "label": "company",
          "name": "Blue World Films",
          "props": {
            "country_code": "[us]",
            "id": 230790,
            "md5sum": "2c009856c4b62f83042dede53eda0ea3",
            "name": "Blue World Films",
            "name_pcode_nf": "B4643",
            "name_pcode_sf": "B4643"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "position": {
          "x": 161,
          "y": 300
        },
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "production 4.3397690",
        "data": {
          "_order": "start",
          "id": "4.3397690",
          "label": "production",
          "name": "Haunted House",
          "props": {
            "full_info": [
              {
                "color info": "Color"
              },
              {
                "countries": "USA"
              },
              {
                "genres": "Horror"
              },
              {
                "languages": "English"
              }
            ],
            "id": 3331921,
            "kind": "video game",
            "md5sum": "df53d2ed4be16d210280f498d064bed7",
            "phonetic_code": "H532",
            "production_year": 1981,
            "title": "Haunted House"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "position": {
          "x": 483,
          "y": 300
        },
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.34997",
        "data": {
          "_order": "end",
          "id": "5.34997",
          "label": "company",
          "name": "Atari",
          "props": {
            "id": 17749,
            "md5sum": "ac8fe873bc90b3779dd13935dd6f29f2",
            "name": "Atari",
            "name_pcode_nf": "A36"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "position": {
          "x": 805,
          "y": 300
        },
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "production 4.3398121",
        "data": {
          "_order": "start",
          "id": "4.3398121",
          "label": "production",
          "name": "Haunted House",
          "props": {
            "full_info": [
              {
                "color info": "Black and White"
              },
              {
                "countries": "Philippines"
              },
              {
                "genres": "Comedy"
              },
              {
                "languages": "Tagalog"
              },
              {
                "languages": "English"
              },
              {
                "locations": "Manila, Metro Manila, Philippines"
              },
              {
                "sound mix": "Mono"
              },
              {
                "tech info": "OFM:35 mm"
              },
              {
                "tech info": "PFM:35 mm"
              },
              {
                "release dates": "Philippines:November 1942"
              }
            ],
            "id": 3331919,
            "kind": "movie",
            "md5sum": "e44b0cc37ecab3d1a316d1ea791c92ae",
            "phonetic_code": "H532",
            "production_year": 1942,
            "title": "Haunted House"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "position": {
          "x": 1127,
          "y": 300
        },
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.69140",
        "data": {
          "_order": "end",
          "id": "5.69140",
          "label": "company",
          "name": "Sampaguita Pictures",
          "props": {
            "country_code": "[ph]",
            "id": 21958,
            "md5sum": "e46f6ab26c1fb1bc8095b03b8bea2a37",
            "name": "Sampaguita Pictures",
            "name_pcode_nf": "S5123",
            "name_pcode_sf": "S5123"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "position": {
          "x": 1449,
          "y": 300
        },
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "production 4.7058",
        "data": {
          "_order": "start",
          "id": "4.7058",
          "label": "production",
          "name": "Haunted House",
          "props": {
            "episode_nr": 6,
            "full_info": [
              {
                "tech info": "CAM:Arri Alexa"
              },
              {
                "tech info": "CAM:Canon 5D Mark II SLR Camera, Canon Lenses"
              },
              {
                "release dates": "Australia:26 November 2013"
              }
            ],
            "id": 51,
            "kind": "episode",
            "md5sum": "9fae28455fdcdbcb6a725e501abea51a",
            "phonetic_code": "H532",
            "production_year": 2013,
            "season_nr": 1,
            "title": "Haunted House"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "position": {
          "x": 161,
          "y": 500
        },
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.3494",
        "data": {
          "_order": "end",
          "id": "5.3494",
          "label": "company",
          "name": "Australian Broadcasting Corporation (ABC)",
          "props": {
            "country_code": "[au]",
            "id": 5,
            "md5sum": "3543eb7b85c34815894baad029499929",
            "name": "Australian Broadcasting Corporation (ABC)",
            "name_pcode_nf": "A2364",
            "name_pcode_sf": "A2364"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "position": {
          "x": 483,
          "y": 500
        },
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.147917",
        "data": {
          "_order": "end",
          "id": "5.147917",
          "label": "company",
          "name": "Ludo Studio",
          "props": {
            "country_code": "[au]",
            "id": 104142,
            "md5sum": "fd0519f468a5b6d8cebaf25be83bf3f8",
            "name": "Ludo Studio",
            "name_pcode_nf": "L323",
            "name_pcode_sf": "L323"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "position": {
          "x": 805,
          "y": 500
        },
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "production 4.465225",
        "data": {
          "_order": "start",
          "id": "4.465225",
          "label": "production",
          "name": "Haunted House",
          "props": {
            "episode_nr": 6,
            "full_info": [
              {
                "certificates": "Argentina:Atp"
              },
              {
                "color info": "Color"
              },
              {
                "languages": "English"
              },
              {
                "locations": "Orlando, Florida, USA"
              },
              {
                "runtimes": "Argentina:28"
              },
              {
                "sound mix": "Stereo"
              },
              {
                "tech info": "OFM:Video"
              },
              {
                "tech info": "PFM:Video"
              },
              {
                "tech info": "RAT:1.33 : 1"
              },
              {
                "release dates": "USA:20 April 1991"
              }
            ],
            "id": 422824,
            "kind": "episode",
            "md5sum": "f886d3c914379356744600e88790d844",
            "phonetic_code": "H532",
            "production_year": 1991,
            "season_nr": 1,
            "title": "Haunted House"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "position": {
          "x": 1127,
          "y": 500
        },
        "removed": false,
        "selectable": true,
        "selected": false
      },
      {
        "classes": "company 5.15265",
        "data": {
          "_order": "end",
          "id": "5.15265",
          "label": "company",
          "name": "Nickelodeon Network",
          "props": {
            "country_code": "[us]",
            "id": 28,
            "md5sum": "9cf3e3c2967ec121356ba22b5d06a940",
            "name": "Nickelodeon Network",
            "name_pcode_nf": "N2435",
            "name_pcode_sf": "N2435"
          }
        },
        "grabbable": true,
        "group": "nodes",
        "locked": false,
        "position": {
          "x": 1449,
          "y": 500
        },
        "removed": false,
        "selectable": true,
        "selected": false
      }
    ]
    },
  ];
  /////////////////////////////////////////////////////////
  // console.log("agens-demo-data.js is loaded!");
 
}( window.agens.graph = window.agens.graph || {}, jQuery ));
