import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

// Path Are Relative to current location
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({
    templateUrl: 'app/events/events-list.component.html',
})

export class EventListComponent implements OnInit {
    events: any

    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        // 'eventReceived' ==> This must match with what is in the routes.ts
        this.events = this.route.snapshot.data['eventReceived']
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName)
    }
}