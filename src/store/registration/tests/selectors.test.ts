import * as selectors from '../selectors';

describe('registration selectors', () => {
    let state;
    beforeEach(() => {
        state = {
            registration: {
                login: '',
                password: '',
                confirm: '',
            },
        };
    });
    describe('selectors.registrationStore', () => {
        it('toBe defined', () => {
            expect(selectors.registrationStore).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.registrationStore).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.registrationStore(state)).toEqual(state.registration);
        });
    });
     describe('selectors.regValues', () => {
        it('toBe defined', () => {
            expect(selectors.regValues).toBeDefined();
        });
        it('toBe function', () => {
            expect(typeof selectors.regValues).toBe('function');
        });
        it('should return value', () => {
            expect(selectors.regValues(state)).toEqual({ login: '', password: '', confirm: '' });
        });
    });
});
