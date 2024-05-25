import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,Text,
} from 'react-native';
import TagInputComponentWrapper from '../../../components/tag/TagInputComponent';
import { useRoute } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const RolesView = ({navigation}) => {
  let route=useRoute();
  let mode=route.params?.mode;
  const rolesList = ['Electrician','Apprentice Electrician','Electrical Specialist'];//useContext(UserContext).user.skills.skills;

  return (
    <TagInputComponentWrapper itemList={rolesList} mode={mode?mode:'view'}/>
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

export default RolesView;