export const fakeAuth = {
    // boolean property => it's set to false, which means that at the start the user is not authenticated
    isAuthenticated: false,

    // It's a method that simulates the login process, it sets fakeAuth.isAuthenticated on true
    login(callBack) {
        fakeAuth.isAuthenticated = true
        callBack()
    },

    // It's a method that simulates the logout process, it sets fakeAuth.isAuthenticated on false
    logout(callBack) {
        fakeAuth.isAuthenticated = false
        callBack()
    }
};