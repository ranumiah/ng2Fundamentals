import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { EventService } from '../shared/event.service'
import { IEvent } from '../shared/index'

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image { height: 100px; }
  `]
})

export class EventDetailsComponent {
    event: IEvent

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }
    // We navigate to this page via: /events/1
    // this.route.snapshot.params['id'] ==> Gets the parameters of the current route, which was used to access this componet
    // + ==> casting the 
    // .params['id'] ==> matches /:id from routes.ts
    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }

}