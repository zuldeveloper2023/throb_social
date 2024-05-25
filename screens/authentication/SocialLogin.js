/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  View, StyleSheet, Alert, Text,Pressable 
} from 'react-native';

import Button from '../../components/Button';
const styles = StyleSheet.create({
 
});

export default function SocialLogin({ navigation, signIn: signInCb }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function signInHandle() {
//todo
  };

  return (
    <View>
      <Text> Social Logind</Text>
      <Button backgroundColor={'#28A635'}
      >
        Continue with Google
      </Button>
      <Button backgroundColor={'#28A635'}
      >
        Continue with Facebook
      </Button>

    </View>
  );
}

