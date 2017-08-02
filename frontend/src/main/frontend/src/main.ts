import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

// **NOTE: ERROR 때문에 ProdMode 활성화 함
// ==> Expression ___ has changed after it was checked
// https://stackoverflow.com/questions/34364880/expression-has-changed-after-it-was-checked/34364881#34364881

// if (environment.production) {
  enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule);
