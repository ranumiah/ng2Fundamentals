import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { DebugElement } from '@angular/core'
import { By } from '@angular/platform-browser'

import { SessionListComponent } from './session-list.component'
import { AuthService } from '../../user/auth.service'
import { VoterService } from './voter.service'
import { ISession } from '../shared/event.model'

// These needs but not tested
import { UpvoteComponent } from './upvote.component'
import { DurationPipe } from '../shared/duration.pipe'
import { CollapsibleWellComponent } from '../../common/collapsible-well.component'

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement

  beforeEach(async(() => {
    let mockAuthService = {
      isAuthenticated: () => true,
      currentUser: { userName: 'Joe' }
    };
    let mockVoterService = {
      userHasVoted: () => true
    };

    // This is like app.module.ts    
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        UpvoteComponent,
        DurationPipe,
        CollapsibleWellComponent
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

  describe('initial display', () => {

    it('should have the correct session title', () => {
      component.sessions = [{ id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner', abstract: 'abstract', voters: ['john', 'bob'] }];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      // This is using the NativeElement i.e te RAW DOM Query Selector
      expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
    })
  })

})