import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppCoponent } from './events-app.component'
import { EventListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventSerivce } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'

// So this guy describes the class that follows it
@NgModule({
    imports: [BrowserModule],       // What stuff do I need?
    declarations: [                 // What's in my app module?
        EventsAppCoponent,
        EventListComponent,
        EventThumbnailComponent,
        NavBarComponent
    ],
    providers: [                    // what services do I need?
        EventSerivce,
        ToastrService
    ],
    bootstrap: [EventsAppCoponent]  // Where do I start?
})
export class AppModule { }


// All the configuration occurs in the NgModule decorator. The bootstrap property is only necessary in this root NgModule.
// It instructs Angular to examine the existing DOM (parsed from index.html in this case), identifying the elements to replace with the components defined in bootstrap.
// The imports property defines any NgModules that are consumed by this NgModule. Being this root NgModule is running in a browser, you must import the BrowserModule.
// The other NgModules in your application do not need to import that BrowserModule, only the root NgModule.
// Finally, you declare all of the Components and Directives that belong to this NgModule in declarations.
// There are several other important properties with the NgModule decorator so refer to the documentation for more information.