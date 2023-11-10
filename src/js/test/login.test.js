import { login } from "../../js/api/auth/login.js";
require("dotenv/config");

const email = process.env.EMAIL;
const password = process.env.PASSWORD;
const accessToken = process.env.TOKEN;

describe("login function", () => {
    let mockFetchSuccess;
    let mockFetchFailure;

    beforeEach(() => {
        mockFetchSuccess = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue({
                email: email,
                password,
                accessToken: accessToken,
            }),
        });

        mockFetchFailure = jest.fn().mockResolvedValue({
            ok: false,
            statusText: "Unauthorized",
        });

        global.fetch = mockFetchSuccess;
        global.localStorage = {
            getItem: jest.fn(),
            setItem: jest.fn(),
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Throws error if credentials are invalid)", async () => {
        global.fetch = mockFetchFailure;
        await expect(login("test@gmail.com", "test")).rejects.toThrow(
            "Unauthorized",
        );
    });

    it("Log in and test localstorage", async () => {
        const mockResponse = {
            ok: true,
            json: jest.fn().mockResolvedValue({
                email: email,
                password,
            }),
        };
        global.fetch = jest.fn().mockResolvedValue(mockResponse);
        const profile = await login(email, password);
        expect(profile).toEqual({
            email: email,
        });
        expect(global.localStorage.setItem).toHaveBeenCalledWith(
            "profile",
            JSON.stringify(profile),
        );
        expect(global.localStorage.getItem).toHaveBeenCalledWith("token");
    });
});
