import { Component, OnInit } from '@angular/core'
// Path Are Relative to current location
import { EventSerivce } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html',
})

export class EventListComponent implements OnInit {
    events: any[]

    constructor(private eventService: EventSerivce, private toastr: ToastrService) {
    }

    ngOnInit() {
        this.events = this.eventService.getEvents()
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName)
    }
}