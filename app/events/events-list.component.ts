import { Component, OnInit } from '@angular/core'
import { EventSerivce } from './shared/event.service'

@Component({
    selector: 'events-list',
    templateUrl: 'app/events/events-list.component.html',
})

export class EventListComponent implements OnInit {
    events:any[]

    constructor(private eventService: EventSerivce){
    }

    ngOnInit(){
        this.events = this.eventService.getEvents()
    }
}