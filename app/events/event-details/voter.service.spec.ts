import { Observable } from 'rxjs/Observable';

import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';

describe('VoterService', () => {
    let voterService: VoterService,
        mockHttp;

    // SETUP
    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    // Test Fixture
    describe('deleteVoter', () => {

        // Test Method        
        it('should remove the voter from the list of voters', () => {
            // Arrange
            let session = { id: 6, voters: ['joe', 'john'] };
            mockHttp.delete.and.returnValue(Observable.of(false));

            // Act            
            voterService.deleteVoter(3, <ISession>session, 'joe');

            // Assert            
            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('john');
        });

        it('should call http.delete with the right URL', () => {
            let session = { id: 6, voters: ['joe', 'john'] };
            mockHttp.delete.and.returnValue(Observable.of(false));

            voterService.deleteVoter(3, <ISession>session, 'joe');

            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe');
        });
    });

    describe('addVoter', () => {

        it('should call http.post with the right URL', () => {
            let session = { id: 6, voters: ['john'] };
            mockHttp.post.and.returnValue(Observable.of(false));

            voterService.addVoter(3, <ISession>session, 'joe');

            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', '{}', jasmine.any(Object));
        });
    });
});