import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';

@Component({
    selector: 'session-list',
    templateUrl: '/app/events/event-details/session-list.component.html',
    styles: ['collapsible-well h6 {margin-top:-5px; margin-bottom:10px }'],
})
export class SessionListComponent {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    visibleSessions: ISession[] = [];

    // This will get call everything one of the @Input() value is changes    
    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filter) {
        if (filter === 'all') {
            // This crate a complete duplicate array with all the element
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter;
            })
        }
    }
}