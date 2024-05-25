import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import ExperienceItem from './ExperienceItem';
import { UserContext } from '../../context/context';

const { width, height } = Dimensions.get('window');

const Experiences = ({ navigation }) => {
  const experiencesList = useContext(UserContext).user.experiences?.experiences;
  console.log(experiencesList);
  return (
    experiencesList?.map((item) => (
      <View key={item.key} style={styles.item}>
        <ExperienceItem key={item.key+"expi"} navigation={navigation} dataItem={item} />
      </View>
    ))
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    paddingBottom: 10,
    width: width,
    marginVertical: 1,
  },
  title: {
    fontSize: 32,
  },
});

export default Experiences;