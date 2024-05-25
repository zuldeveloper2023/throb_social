import React, {  useState, useEffect } from 'react';
import {
  StyleSheet, View, ActivityIndicator,
} from 'react-native';
import { signIn, fetchAuthSession, signOut, getCurrentUser } from 'aws-amplify/auth';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import getUsers from '../service/UserService';
import { AuthContext, UserContext } from '../context/context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AuthLoadingScreen = () => {
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    signOutHandler();
    loadApp();
  }, []);
  async function loadApp() {
    await getCurrentUser()
      .then((user) => {
        this.signIn(user);
      })
      .catch(() => {
        console.log('err signing in');
      });
    setLoading(false);

  }

  async function signOutHandler() {
    await signOut()
      .catch((err) => {
        console.log('ERROR: ', err);
      });
    setUserToken(null);

  }


  async function signInHandler(user) {
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    setUserToken(accessToken.toString());

  }

  useEffect(() => {
    if (userToken!=undefined) {
      console.log(userToken)
      getUsers(userToken).then((data) => {
        console.log(data);
        setUser(data);
      });
    }
  }, [userToken]);




  return (
    <AuthContext.Provider value={{ userToken, setUserToken }}>
      <UserContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          {userToken == null && loading ?
            <View style={styles.container}>
              <ActivityIndicator size="large" color="#aaa" />
            </View> : (userToken != null ? <AppNavigator signOut={signOutHandler} /> : <AuthNavigator signIn={signInHandler} />)
          }
        </NavigationContainer>
      </UserContext.Provider>
    </AuthContext.Provider>
  );


}

export default AuthLoadingScreen;
