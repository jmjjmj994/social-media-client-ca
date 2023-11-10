import { logout } from '../../js/api/auth/logout.js';


describe('Tests of logout.js', () => {
    beforeEach(() => {
        global.localStorage = {
            getItem: jest.fn(() => 'token'),
            removeItem: jest.fn(),
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Clears the token from local storage on logout', async () => {
        await logout();

        expect(global.localStorage.removeItem).toHaveBeenCalledWith('token');
    });
});
