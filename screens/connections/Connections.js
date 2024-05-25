import React from 'react';
import Video, { VideoRef } from 'react-native-video';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import ConnectionItem from './ConnectionItem';
import GlobalStyles from '../../styles/GlobalStyles';
import SimpleSearch from '../../components/search/SimpleSearch';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    firstName:'John',
    lastName:'Doe'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1a',
    firstName:'John',
    lastName:'Doe'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b2a',
    firstName:'John',
    lastName:'Doe'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b3a',
    firstName:'John',
    lastName:'Doe'
  },
 
];
const { width, height } = Dimensions.get('window');
const Item = ({item}) => (
  <View style={styles.item}>
    
    <ConnectionItem dataItem={item}/>
  </View>
);

const Connections = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SimpleSearch/>
      <Text style={GlobalStyles.OpeningContent}> You may know these people</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    height:120,
    width:width,
    paddingLeft: 20,
    marginVertical: 1,
    //marginHorizontal: 2,
  },
  title: {
    fontSize: 32,
  },
});

export default Connections;