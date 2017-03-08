import { Observable } from 'rxjs/Rx'

import { VoterService } from './voter.service'
import { ISession } from '../shared/event.model'

describe('VoterService', () => {
    let voterService: VoterService,
        mockHttp;

    // SETUP
    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post'])
        voterService = new VoterService(mockHttp);
    });

    // Test Fixture
    describe('deleteVoter', () => {

        // Test Method        
        it('should remove the voter from the list of voters', () => {
            // Arrange
            var session = { id: 6, voters: ["joe", "john"] };
            mockHttp.delete.and.returnValue(Observable.of(false));

            // Act            
            voterService.deleteVoter(3, <ISession>session, "joe");

            // Assert            
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe("john");
        })
    })
})