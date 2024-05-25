import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import ConnectionItem from './JobItem';
import Autocomplete from '../../components/search/Autocomplete';
import { Platform } from 'react-native';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baaaa',
    jobtitle: 'Apprentice Electrician',
    location: 'Sydney',
    country: 'Australia'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b21a',
    jobtitle: 'Electrician',
    location: 'Adelaide',
    country: 'Australia'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb282ba14',
    jobtitle: 'Electrician',
    location: 'Victoria',
    country: 'Australia'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb282ba12',
    jobtitle: 'Apprentice Electrician',
    location: 'Canberra',
    country: 'Australia'
  },

];
const { width, height } = Dimensions.get('window');
const Item = ({ item }) => (
  <View style={styles.item}>

    <ConnectionItem dataItem={item} />
  </View>
);

const Jobs = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (


    <ScrollView
      nestedScrollEnabled
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ paddingBottom: 200 }}
      style={styles.scrollContainer}>
      <View style={[styles.container]}>
        <View style={[styles.section, Platform.select({ ios: { zIndex: 97 } })]}>
          <Text style={styles.sectionTitle}></Text>
          <Autocomplete placeholder="Search jobs" autocompleteApiUrl="https://jsonplaceholder.typicode.com/posts" searchApiUrl="https://jsonplaceholder.typicode.com/posts" searchResults={searchResults} setSearchResults={setSearchResults}/>
        </View>
        <Text style={styles.OpeningContent}> The following jobs may interest you</Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 50,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 3,
  },
  item: {
    backgroundColor: 'white',
    height: 140,
    width: width,
    paddingLeft: 5,
    marginVertical: 1,
    //marginHorizontal: 2,
  },
  OpeningContent: {
    paddingLeft: 0,
    paddingRight: 20,
    paddingBottom: 20,
    fontFamily: 'Ruda_400Regular',
  }

})
export default Jobs;