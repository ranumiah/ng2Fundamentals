import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {

    }

    resolve() {
        // (events => events) is Short Hand for ( (events) => {return events})
        // 'eventReceived' ==> This must match with what is in the routes.ts
        return this.eventService.getEvents().map(eventReceived => eventReceived)
    }
}