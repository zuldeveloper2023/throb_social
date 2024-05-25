/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import {signUp} from 'aws-amplify/auth';
import Button from '../../components/Button';
import PasswordItem from '../../components/PasswordItem';
import Input from '../../components/Input';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
});

export default function SignUp({ navigation }) {
  const [name, onChangeName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, onChangeEmail] = useState('');
 
  const [invalidMessage, setInvalidMessage] = useState(null);

  const signUpHandler = async () => {
    const validPassword = password.length > 5 && (password === confirmPassword);
    if (validPassword) {
      setInvalidMessage(null);
      try {
        const { userId, nextStep } = await signUp({
          username: email,
          password: password,
          SignInOptions: {
            authFlowType: 'USER_PASSWORD_AUTH'
        }

        });


        console.log('navigation: ', navigation);
        navigation.navigate('Confirmation', { email });
      } catch (error) {
        console.log('error signing up:', error);
      }

    } else {
      setInvalidMessage('Password must be equal and have greater lenght than 8.');
    }
  };

  return (
    <View style={styles.container}>
      
      <Input
        value={email}
        placeholder="email@example.com"
        onChange={(text) => onChangeEmail(text)}
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
      />
    
      <PasswordItem placeholder="Password" pwd={password} onChangePassword={setPassword}/>
      <PasswordItem placeholder="Confirm password" pwd={confirmPassword} onChangePassword={setConfirmPassword}/>
      <Text>
        {invalidMessage}
      </Text>
      <Text>
       
      </Text>
      <Button
        onPress={() => signUpHandler()}
      >
        Continue
      </Button>
      
    </View>
  );
}
