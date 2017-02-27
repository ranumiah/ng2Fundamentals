import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { EventService } from '../shared/event.service'

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image { height: 100px; }
  `]
})

export class EventDetailsComponent {
    event: any

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }
    // We navigate to this page via: /events/1  
    ngOnInit() {
        this.event = this.eventService.getEvent(1)
    }

}