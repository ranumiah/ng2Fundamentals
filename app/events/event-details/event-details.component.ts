import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

import { IEvent, ISession, EventService } from '../shared/index'

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image { height: 100px; }
    a {cursor:pointer}
  `]
})

export class EventDetailsComponent implements OnInit {
    event: IEvent
    addMode: boolean
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }
    // We navigate to this page via: /events/1
    // this.route.snapshot.params['id'] ==> Gets the parameters of the current route, which was used to access this componet
    // + ==> casting the string to int 
    // .params['id'] ==> matches /:id from routes.ts

    // Subscribing to the route changes
    // ngOnInit() {
    //     this.route.params.forEach((params: Params) => {
    //         this.event = this.eventService.getEvent(+params['id']);
    //         this.addMode = false;
    //     })
    // }

    ngOnInit() {
        this.route.data.forEach((data) => {
            this.event = data['event'];
            this.addMode = false;
        })
    }

    addSession() {
        this.addMode = true
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1
        this.event.sessions.push(session)
        this.eventService.saveEvent(this.event).subscribe();
        this.addMode = false
    }

    cancelAddSession() {
        this.addMode = false
    }
}