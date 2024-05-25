import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import edit_styles from '../../styles/common/editscreens/editstyles';
import Input from '../Input';
import * as Location from 'expo-location';
export default function AddressLocator({placeholder,address, showCurrentAddress,setAddress}) {
  const searchAddress=async(addressTerm)=>{
    //let location = await Location.getCurrentPositionAsync({});
    let matchedLocation = await Location.geocodeAsync("4 McEl" );
    let matchedAddress = await Location.reverseGeocodeAsync(matchedLocation[0]);
    //setAddress(matchedAddress);
  }
  return (
    
    <View>
      <Input xstyles={edit_styles.textInputCustom} onChange={(text) => searchAddress(text)} placeholder={placeholder} value={address}></Input>

      <TouchableHighlight style={{ marginTop: -40, marginLeft: 320, paddingBottom: 20 }}
        onPress={() => showCurrentLocation()}
      >
        <FontAwesome6 name="location-crosshairs" size={20} />
      </TouchableHighlight>
    </View>
  );
}