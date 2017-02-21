import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app.module'

// One time Bootstrap and load the initial main container
platformBrowserDynamic().bootstrapModule(AppModule)