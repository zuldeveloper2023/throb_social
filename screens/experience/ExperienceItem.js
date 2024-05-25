import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: -18
  },
  text1: {
    flex: 4.5,
    //paddingTop:20,
    //paddingLeft:0

  },
  text2: {
    flex: 1,
    //paddingTop:20,

  },
  text3: {
    flex: 1,
    //paddingTop:20,
    paddingLeft: 120,

  },
  experieneHeading: {
    fontWeight: "bold",

  },
  experieneHeadingEdit: {


  },
  experienePlusSign: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default function ExperienceItem({ dataItem, navigation, signOut }) {


  return (
    <View>

      <View style={styles.container}>
        <Text style={[styles.text1, styles.experieneHeading, GlobalStyles.OpeningContent]}>{dataItem.job_title}</Text>
        <Text style={[styles.text2, styles.experieneHeading, GlobalStyles.OpeningContent]}></Text>
        <TouchableHighlight
          onPress={() => navigation.navigate('Experience Details', { dataItem: dataItem })}
        ><Text style={[styles.text3, GlobalStyles.OpeningContent]}>edit</Text>
        </TouchableHighlight>
      </View>
      <Text style={[GlobalStyles.BaseText]}>{dataItem.company}</Text>
      <Text style={[GlobalStyles.BaseText]}>{dataItem.start_date} - {dataItem.end_date}</Text>
      <Text style={[GlobalStyles.BaseText]}>{dataItem.location}</Text>
    </View >


  )
}
