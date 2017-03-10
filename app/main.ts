import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// This will force it to run in Prod Mode
// import { enableProdMode } from '@angular/core';
// enableProdMode();

// This is using (JIT) compilation in the browser with platformBrowserDynamic to bootstrap the AppModule.
// One time Bootstrap and load the initial main container
platformBrowserDynamic().bootstrapModule(AppModule);