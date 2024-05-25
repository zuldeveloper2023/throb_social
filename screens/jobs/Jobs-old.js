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
import ConnectionItem from './JobItem';
import GlobalStyles from '../../styles/GlobalStyles';
import SimpleSearch from '../../components/search/SimpleSearch';
import Autocomplete from '../../components/search/Autocomplete';
import { Platform } from 'react-native';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baaaa',
    jobtitle:'Apprentice Electrician',
    location:'Sydney',
    country:'Australia'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b21a',
    jobtitle:'Electrician',
    location:'Adelaide',
    country:'Australia'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb282ba14',
    jobtitle:'Electrician',
    location:'Victoria',
    country:'Australia'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb282ba12',
    jobtitle:'Apprentice Electrician',
    location:'Canberra',
    country:'Australia'
  },
 
];
const { width, height } = Dimensions.get('window');
const Item = ({item}) => (
  <View style={styles.item}>
    
    <ConnectionItem dataItem={item}/>
  </View>
);

const Jobs = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SimpleSearch/>
      <View style={[styles.section, Platform.select({ ios: { zIndex: 97 } })]}>
              <Text style={styles.sectionTitle}>Remote list customization</Text>
              <Autocomplete/>
            </View>
      
      <Text></Text>
      <Text style={GlobalStyles.OpeningContent}> The following jobs may interest you</Text>
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
    paddingTop:0,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    height:140,
    width:width,
    paddingLeft: 20,
    marginVertical: 1,
    //marginHorizontal: 2,
  },
  title: {
    fontSize: 32,
  },
});

export default Jobs;