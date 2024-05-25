import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Auth from '@aws-amplify/auth';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { resetPassword,confirmResetPassword  } from 'aws-amplify/auth';
import PasswordItem from '../../components/PasswordItem';
import GlobalStyles from '../../styles/GlobalStyles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  textLeftAlign:{
    left:-75,
    paddingBottom:10,
  }
});

function ForgetPassword({ navigation }) {
  const [email, onChangeEmail] = useState('');
  const [editableInput, setEditableInput] = useState(true);
  const [confirmationStep, setConfirmationStep] = useState(false);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const getConfirmationCode = async () => {
    if (email.length > 4) {
      try {
        const output = await resetPassword({ username:email });
        handleResetPasswordNextSteps(output);
        setEditableInput(true);
          setConfirmationStep(true);
          setErrorMessage('');
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMessage('Provide a valid email');
    }
  };

  
  function handleResetPasswordNextSteps(output) {
    const { nextStep } = output;
    switch (nextStep.resetPasswordStep) {
      case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
        const codeDeliveryDetails = nextStep.codeDeliveryDetails;
        console.log(
          `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
        );
        // Collect the confirmation code from the user and pass to confirmResetPassword.
        break;
      case 'DONE':
        console.log('Successfully reset password.');
        break;
    }
  }
  const postNewPassword = async () => {
   

      try {
        await confirmResetPassword({ username:email, confirmationCode:code, newPassword });
        setErrorMessage('');
        navigation.navigate('SignIn');
      } catch (error) {
        console.log(error);
      }
  };

  return (
    <View style={styles.container}>
      <Input
        value={email}
        placeholder="email@example.com"
        onChange={(text) => onChangeEmail(text)}
        editable={editableInput}
        autoCompleteType="email"
        autoCapitalize="none"
        autoFocus
        keyboardType="email-address"
      />
      <Button
        onPress={() => getConfirmationCode()}
      >
        Reset password via email
      </Button>
      <Text></Text>
      {confirmationStep && (
        <>
          <Text style={[GlobalStyles.OpeningContent,styles.textLeftAlign]}>Check your email for the code.</Text>
          <Input
            value={code}
            placeholder="Secret code"
            onChange={(text) => setCode(text)}
          />
          
          <PasswordItem placeholder="New password" pwd={newPassword} onChangePassword={setNewPassword}/>
          <Button
            onPress={() => postNewPassword()}
          >
            Confirm
          </Button>
        </>
      )}
      <Text>{errorMessage}</Text>
    </View>
  );
}

export default ForgetPassword;
