import { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import {
    View, Text,
    StyleSheet,
  } from 'react-native';
export default function SimpleSearch() {
    const [search, setSearch] = useState('');



    return (
        <View>
        <Text></Text>
        <SearchBar containerStyle={styles.container}
        inputContainerStyle={{backgroundColor:'white'}}
            placeholder="Search"
            onChangeText={(text) => setSearch(text)}
            value={search}
        />
       
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:20,
      marginBottom:70,
      borderColor:'white',
      backgroundColor:'white',
    },
    item: {
      backgroundColor: 'white',
      height:120,
      
      padding: 20,
      marginVertical: 1,
      //marginHorizontal: 2,
    },
    title: {
      fontSize: 32,
    },
  });