import React, { useContext } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';

import Button from '../../components/Button';
import edit_styles from '../../styles/common/editscreens/editstyles';
import { AuthContext,UserContext } from '../../context/context';
import { signOut } from 'aws-amplify/auth';


export default function UserSettings(navigation) {
    let user = useContext(UserContext);
    let token = useContext(AuthContext);
    async function signOutHandler() {
        await signOut()
          .catch((err) => {
            console.log('ERROR: ', err);
          });
        token.setUserToken(null);
    
      }
    
    return (

        <View style={{ backgroundColor: 'white' }}>
            <ScrollView>
                <View>
                    <Text></Text>
                    
                    <View style={edit_styles.container}>
                                            <Button
                            onPress={() => signOutHandler()}
                        >
                            Sign out
                        </Button>
                    </View>

                </View >
            </ScrollView>
        </View>

    )
}
