// Angular Components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// My Components
import {
    EventListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    UpvoteComponent,
    VoterService,
    LocationValidator,
    EventResolver
} from './events/index';

import {
    JQ_TOKEN,
    TOASTR_TOKEN,
    IToastr,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective
} from './common/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

declare let toastr: IToastr;
declare let jQuery: Object;

// So this guy describes the class that follows it
@NgModule({
    imports: [                          // What stuff do I need?
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        HttpModule
    ],
    declarations: [                 // What's in my app module?
        EventsAppComponent,
        EventListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,      // Directives also goes under Declarations
        UpvoteComponent,
        LocationValidator
    ],
    providers: [                    // what services do I need? using short-hand
        EventService,
        // Whenever TOASTR_TOKEN is used then use toastr object
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
        // { provide: EventRouteActivator, useClass: EventRouteActivator } === EventRouteActivator,
        // EventRouteActivator,
        EventListResolver,
        AuthService,
        {                           // This is a long-hand
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        VoterService,
        EventResolver
    ],
    bootstrap: [EventsAppComponent]  // Where do I start?
})
export class AppModule { }

// this should have been somewhere else but for learning it is here for now
function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?');
    return true;
}

// All the configuration occurs in the NgModule decorator. The bootstrap property is only necessary in this root NgModule.
// It instructs Angular to examine the existing DOM (parsed from index.html in this case), identifying the elements to replace with the components defined in bootstrap.
// The imports property defines any NgModules that are consumed by this NgModule. Being this root NgModule is running in a browser, you must import the BrowserModule.
// The other NgModules in your application do not need to import that BrowserModule, only the root NgModule.
// Finally, you declare all of the Components and Directives that belong to this NgModule in declarations.
// There are several other important properties with the NgModule decorator so refer to the documentation for more information.