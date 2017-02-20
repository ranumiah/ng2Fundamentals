import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppCoponent } from './events-app.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [EventsAppCoponent],  // Register the Moduel
    bootstrap: [EventsAppCoponent] // This is the main container module
})
export class AppModule {}