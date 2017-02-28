import { Component, OnInit } from '@angular/core'
// Path Are Relative to current location
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({
    templateUrl: 'app/events/events-list.component.html',
})

export class EventListComponent implements OnInit {
    events: any

    constructor(private eventService: EventService, private toastr: ToastrService) {
    }

    ngOnInit() {
        this.eventService.getEvents().subscribe(receivedEvents => {
            this.events = receivedEvents
        })
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName)
    }
}