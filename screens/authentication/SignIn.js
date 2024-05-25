/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, Text, Pressable
} from 'react-native';
import {  signIn } from 'aws-amplify/auth';
import Button from '../../components/Button';
import JoinButton from '../../components/JoinButton';
import Input from '../../components/Input';
import GlobalStyles from '../../styles/GlobalStyles';
import ShowPassword from '../../components/ShowPassword';
import PasswordItem from '../../components/PasswordItem';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },

  buttonStyle: {
    width: 60
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  styleForTopRightJoinButton:{
    right:-170,
    height:50,
    width:140,
    backgroundColor: '#fff',
  },

  styleForStraightLine:{
    color:'#282DA6'
  },
  styleForOr:{
    top:-15
  }
});

export default function SignIn({ navigation, signIn: signInCb }) {
  const [email, onChangeEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); 
  async function signInHandle() {

    try {
      const { isSignedIn, nextStep } = await signIn({
        username: email,
        password,
        options: {
          authFlowType: 'USER_PASSWORD_AUTH'
        }
      });
      if (isSignedIn) {
        signInCb();

      }
    } catch (error) {
      console.log('error signing in', error);
    }
  };
  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
}; 
  return (
    <View style={styles.container}>
      <View style={styles.styleForTopRightJoinButton}>
      <JoinButton  onPress={() => navigation.navigate('SignUp')}
      >
       Join
      </JoinButton></View>
      <Text style={GlobalStyles.OpeningContent}>
        Welcome to your growth support community - unpack your exponential potential.
      </Text>

      <Input
        value={email}
        placeholder="email@example.com"
        onChange={(text) => onChangeEmail(text)}
        autoCompleteType="Email"
        autoCapitalize="none"
        autoFocus
        keyboardType="email-address"
      />
      <PasswordItem placeholder="Password" pwd={password} onChangePassword={setPassword}/>
      <Button 
        onPress={() => signInHandle()}
      >
        Sign In
      </Button>
      <Text>{errorMessage}</Text>

      <Pressable onPress={() => navigation.navigate('ForgetPassword')}>
        <Text style={GlobalStyles.textStyle}>Forgot Password?</Text>
      </Pressable>
      <Text style={styles.styleForStraightLine}>________________________________________</Text>
      <Text style={[GlobalStyles.textStyle,styles.styleForOr]}>or</Text>
      <Text style={GlobalStyles.textStyle}> Social Login</Text>
      <Text></Text>
      <Button backgroundColor={'#28A635'}
      >
        Continue with Google
      </Button>
      <Text></Text>
      <Button backgroundColor={'#28A635'}
      >
        Continue with Facebook
      </Button>
    </View>
  );
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
};
