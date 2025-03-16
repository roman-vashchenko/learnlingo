export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export const selectLoggedIn = (state) => state.auth.isLoggedIn;
