import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app.module'

// This is using (JIT) compilation in the browser with platformBrowserDynamic to bootstrap the AppModule.
// One time Bootstrap and load the initial main container
platformBrowserDynamic().bootstrapModule(AppModule)