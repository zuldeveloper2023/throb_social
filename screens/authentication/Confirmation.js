import React, { useState } from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import {confirmSignUp} from 'aws-amplify/auth';
import Button from '../../components/Button';
import Input from '../../components/Input';
import GlobalStyles from '../../styles/GlobalStyles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    backgroundColor: '#F8F8F8',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

  },
  textLeftAlign:{
    left:-30,
    paddingBottom:10,
  }
});


const Confirmation = ({ route, navigation }) => {
  const [authCode, setAuthCode] = useState('');
  const [error, setError] = useState(' ');
  const { email } = route.params;

  const confirmSignUpHandler = async () => {
    if (authCode.length > 0) {
      try {
        const { isSignUpComplete, nextStep } = await confirmSignUp({
          username:email,
          confirmationCode:authCode
        });
        navigation.navigate('SignIn');
      } catch (error) {
        console.log('error confirming sign up', error);
      }
      
    } else {
      setError('You must enter confirmation code');
    }
  };

  const startAgainHandler = async () => {
    
        navigation.navigate('SignUp');
      
  };

  return (
    <View style={styles.container}>
      <Text style={[GlobalStyles.OpeningContent,styles.textLeftAlign]}>Check your email for the confirmation code.</Text>
      <Input
        value={authCode}
        placeholder="123456"
        onChange={(text) => setAuthCode(text)}
      />
      <Button onPress={() => confirmSignUpHandler()}>Continue</Button>
      <Button onPress={() => startAgainHandler()}>Start again</Button>
      <Text>{error}</Text>
    </View>
  );
};

export default Confirmation;
