// '@angular/core' ==> the exact location is in systems.config.js file
import { Component } from '@angular/core'

@Component({
    selector: 'events-app',
    template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
  `
})

export class EventsAppCoponent {
}
