import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableHighlight } from 'react-native';
import Button from '../components/Button';
import GlobalStyles from '../styles/GlobalStyles';
import SkillsView from './skills/SkillsView';
import { UserContext } from '../context/context';
import Experiences from './experience/Experiences';
import Educations from './education/Educations';
import RolesView from './profile/roles/RolesView';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 0,
    marginBottom: 0,
    backgroundColor:'white'
  },
  text1: {
    flex: 2.5,
    //paddingTop:20,
    paddingLeft: 10,


  },
  text2: {
    flex: 3,
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
  experienePlusSign: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default function Profile({ navigation }) {
  const user = useContext(UserContext);

  
  return (
    <ScrollView>
      <View style={{ backgroundColor: 'white' }}>
        <View style={{ alignItems: 'center', padding: 40 }}>
          <Image style={{ alignItems: 'center' }} source={require('../assets/pi.png')}></Image>
        </View>
        <View style={styles.container}>
          <Text style={[styles.text1, GlobalStyles.OpeningContent]}>First name</Text>
          <Text style={[styles.text2, GlobalStyles.OpeningContent]}>{user.user.first_name}</Text>
          <TouchableHighlight
            onPress={() => navigation.navigate('Personal Details')}

          ><Text style={[styles.text3, GlobalStyles.OpeningContent]}>{'>'}</Text>
          </TouchableHighlight>

        </View>
        <View style={styles.container}>
          <Text style={[styles.text1, GlobalStyles.OpeningContent]}>Phone</Text>
          <Text style={[styles.text2, GlobalStyles.OpeningContent]}>{user.user.phone}</Text>
          <TouchableHighlight
            onPress={() => navigation.navigate('Phone Details')}

          ><Text style={[styles.text3, GlobalStyles.OpeningContent]}>{'>'}</Text>
          </TouchableHighlight>

        </View>
        <View style={styles.container}>
          <Text style={[styles.text1, GlobalStyles.OpeningContent]}>Email</Text>
          <Text style={[styles.text2, GlobalStyles.OpeningContent]}>{user.user.email}</Text>
          <Text style={[styles.text3, GlobalStyles.OpeningContent]}></Text>

        </View>
        <View style={styles.container}>
          <Text style={[styles.text1, GlobalStyles.OpeningContent]}>Personalised link</Text>
          <Text style={[styles.text2, GlobalStyles.OpeningContent]}>dkdk/dhdh</Text>
          <Text style={[styles.text3, GlobalStyles.OpeningContent]}></Text>

        </View>
        <View style={styles.container}>
          <Text style={[styles.text1, GlobalStyles.OpeningContent]}>Career Objective</Text>
          <Text style={[styles.text2, GlobalStyles.OpeningContent]}>{user.user.career_objective}</Text>
          <TouchableHighlight
            onPress={() => navigation.navigate('Career Objective')}

          ><Text style={[styles.text3, GlobalStyles.OpeningContent]}>{'>'}</Text>
          </TouchableHighlight>

        </View>


        <View style={styles.container}>
          <Text style={[styles.text1, GlobalStyles.OpeningContent]}>Address</Text>
          <Text style={[styles.text2, GlobalStyles.OpeningContent]}>{user.user.address}</Text>
          <TouchableHighlight
            onPress={() => navigation.navigate('Personal Details')}

          ><Text style={[styles.text3, GlobalStyles.OpeningContent]}>{'>'}</Text>
          </TouchableHighlight>


        </View>

        <View style={styles.container}>
          <Text style={[styles.text1, styles.experieneHeading, GlobalStyles.OpeningContent]}>Your experience</Text>
          <Text style={[styles.text2, styles.experieneHeading, GlobalStyles.OpeningContent]}></Text>
          <TouchableHighlight
            onPress={() => navigation.navigate('Experience Details', { type: 'new' })}

          ><Text style={[styles.experienePlusSign, styles.text3, GlobalStyles.OpeningContent]}>    +</Text>
          </TouchableHighlight>
        </View>
        <View >
          <Experiences navigation={navigation} />
        </View>
        <Text></Text>
        <View style={styles.container}>
          <Text style={[styles.text1, styles.experieneHeading, GlobalStyles.OpeningContent]}>Your education</Text>
          <Text style={[styles.text2, styles.experieneHeading, GlobalStyles.OpeningContent]}></Text>
          <TouchableHighlight
            onPress={() => navigation.navigate('Education Details', { type: 'new' })}

          ><Text style={[styles.experienePlusSign, styles.text3, GlobalStyles.OpeningContent]}>    +</Text>
          </TouchableHighlight>

        </View>
        <View>
          <Educations navigation={navigation} />

        </View>
        <Text></Text>
        <View style={styles.container}>
          <Text style={[styles.text1, styles.experieneHeading, GlobalStyles.OpeningContent]}>Your skills</Text>
          <Text style={[styles.text2, styles.experieneHeading, GlobalStyles.OpeningContent]}></Text>
          <TouchableHighlight
            onPress={() => navigation.navigate('Skills Edit Details', { mode: 'edit' })}

          ><Text style={[ GlobalStyles.OpeningContent]}>    edit</Text>
          </TouchableHighlight>
        </View>
        <View>
          <SkillsView />
        </View>
        <View style={styles.container}>
          <Text style={[ styles.experieneHeading, GlobalStyles.OpeningContent]}>Roles you are interested in </Text>
          <Text style={[styles.text2, styles.experieneHeading, GlobalStyles.OpeningContent]}></Text>
          <TouchableHighlight
            onPress={() => navigation.navigate('Roles Edit Details', { mode: 'edit' })}

          ><Text style={[ GlobalStyles.OpeningContent]}>    edit</Text>
          </TouchableHighlight>

        </View>
        <View style={styles.container}>
          <RolesView />
        </View>


      </View>
    </ScrollView>
  )
}
