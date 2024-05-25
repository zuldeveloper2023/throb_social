import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { UserContext } from '../../context/context';
import EducationItem from './EducationItem';

const { width, height } = Dimensions.get('window');

const Educations = ({ navigation }) => {
  const educationList = useContext(UserContext).user.educations?.educations;
  return (
    educationList?.map((item) => (
      <View key={item.key} style={styles.item}>
        <EducationItem key={item.key+"edui"} navigation={navigation} dataItem={item} />
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
    width: width,
    paddingBottom: 10,
    marginVertical: 1,
  },
  title: {
    fontSize: 32,
  },
});

export default Educations;