import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,Text,
} from 'react-native';
import TagInputComponentWrapper from '../../components/tag/TagInputComponent';
import { useRoute } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SkillsView = ({navigation}) => {
  let route=useRoute();
  let mode=route.params?.mode;
  const skillsList = ['Electrical','Plumbing','Carpentry','Bricklaying'];////useContext(UserContext).user.skills?.skills;
  return (
    <TagInputComponentWrapper itemList={skillsList} mode={mode?mode:'view'}/>
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

export default SkillsView;