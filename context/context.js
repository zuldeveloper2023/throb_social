import React, { createContext} from 'react';
const AuthContext = createContext({ userToken: '', setUserToken: () => { } });
const UserContext = createContext({ user: {}, setUser: () => { } });
export { AuthContext, UserContext };