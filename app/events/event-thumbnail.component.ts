import { Component, Input } from '@angular/core'

import { IEvent } from './shared/index'

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    // !important; --> is need otherwise the style will get overridden
    styles: [`
    .blue { color: #0000FF !important; }
    .green { color: #003300 !important; }
    .bold { font-weight: bold; }
    .thumbnail { min-height: 210px; }
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})

export class EventThumbnailComponent {
    @Input() event: IEvent

    getStartTimeClassStyleUsingObject() {
        const isOnline = this.event && this.event.onlineUrl
        return { blue: isOnline, bold: isOnline }
    }

    getStartTimeClassStyleUsingArray() {
        if (this.event && this.event.location)
            return ['green', 'bold'] // class name in the style
        return []
    }

    getStartTimeStyle() {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#32CD32', 'font-weight': 'bold' }
    }
}