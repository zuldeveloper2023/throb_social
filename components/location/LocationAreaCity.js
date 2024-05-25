import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import edit_styles from '../../styles/common/editscreens/editstyles';
import Input from '../Input';
import * as Location from 'expo-location';
export default function LocationAreaCity({name,placeholder,updateValue,locationValue}) {
  const [location, setLocation] = React.useState(locationValue);

  const showCurrentLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    let aL = await Location.reverseGeocodeAsync(location.coords);
    let fAl = aL[0].city + ' ' + aL[0].country;
    updateValue(name,fAl);
    setLocation(fAl);
    
}

const onChangeHandler=(name,value)=>{
  updateValue(name,value);
  setLocation(value);
}
  return (
    
    <View>
      <Input xstyles={edit_styles.textInputCustom} onChange={(text) => onChangeHandler(name,text)} placeholder={placeholder} value={location}></Input>

      <TouchableHighlight style={{ marginTop: -40, marginLeft: 320, paddingBottom: 20 }}
        onPress={() => showCurrentLocation()}
      >
        <FontAwesome6 name="location-crosshairs" size={20} />
      </TouchableHighlight>
    </View>
  );
}