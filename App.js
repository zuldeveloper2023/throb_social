import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation';
import config from './src/aws-exports';
import { Amplify } from 'aws-amplify';
import { Ruda_400Regular } from "@expo-google-fonts/ruda";
import * as Location from 'expo-location';
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown';
Amplify.configure(config);
//...
export default function App() {
  const [fontsLoaded] = useFonts({
    Ruda_400Regular,

  });
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let aL = await Location.reverseGeocodeAsync(location.coords)
      //console.log(aL);
      setLocation(aL);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <AutocompleteDropdownContextProvider >
      <View style={styles.container}>
        <AppNavigation />
        <StatusBar style="auto" />

      </View>
    </AutocompleteDropdownContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
