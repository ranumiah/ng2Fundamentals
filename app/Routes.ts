import { Routes } from '@angular/router'

import { EventListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventListResolver } from './events/events-list-resolver.service'

export const appRoutes: Routes = [
    // canDeactivate ==> using Function to guard against route activation
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventListComponent, resolve: { eventReceived: EventListResolver } },
    // canActivate ==> using Service to guard against route activation
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }, // default
    // path:user ==> prefix with /user/
    // loadChildren: 'app/user/user.module#UserModule ==> This is a two part to load the module
    // app/user/user.module ==> Path to the file where the Module
    // #UserModule ==> The name of the Module
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]