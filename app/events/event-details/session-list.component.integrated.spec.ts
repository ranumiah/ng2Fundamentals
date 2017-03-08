import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { DebugElement } from '@angular/core'
import { By } from '@angular/platform-browser'

import { SessionListComponent } from './session-list.component'
import { AuthService } from '../../user/auth.service'
import { VoterService } from './voter.service'
import { ISession } from '../shared/event.model'


describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement

  beforeEach(async(() => {
    let mockAuthService = {};
    let mockVoterService = {};

    // This is like app.module.ts    
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent
      ],
      providers: [
        // We use the longhand instead of short hand for mocking services
        { provide: AuthService, useValue: mockAuthService },
        { provide: VoterService, useValue: mockVoterService }
      ],
      schemas: []
      // This compiles the component and the style sheet
    }).compileComponents(); // This is not required when using WebPack as it does it for you
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  })
})