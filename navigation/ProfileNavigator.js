import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import BioDetailsEdit from '../screens/profile/BioDetailsEdit';
import EducationEdit from '../screens/education/EducationEdit';
import ExperienceEdit from '../screens/experience/ExperienceEdit';
import CareerObjectiveEdit from '../screens/profile/CareerObjectiveEdit';
import { UserContext } from '../context/context';
import UserSettings from '../screens/profile/UserSettings';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SkillsView from '../screens/skills/SkillsView';
import RolesView from '../screens/profile/roles/RolesView';

const AppStack = createStackNavigator();

const ProfileNavigator = () => {
  const user = useContext(UserContext);


  return (
    <AppStack.Navigator>
      <AppStack.Screen name={user.user.first_name?user.user.first_name:'Profile'}
        options={({route, navigation}) => ({ 
          headerRight: () => (
            <TouchableHighlight style={{right:20}}
              onPress={() => navigation.navigate('User Settings')}
            >
              <Ionicons name="settings-outline" size={20} />
            </TouchableHighlight>
          ),
        })}>
        {({ navigation }) => <Profile navigation={navigation} />}
      </AppStack.Screen>
      <AppStack.Screen name="Personal Details">
        {({ navigation }) => <BioDetailsEdit navigation={navigation} />}
      </AppStack.Screen>
      <AppStack.Screen name="Career Objective">
        {({ navigation }) => <CareerObjectiveEdit navigation={navigation} />}
      </AppStack.Screen>
      <AppStack.Screen name="Experience Details">
        {({ navigation }) => <ExperienceEdit navigation={navigation} />}
      </AppStack.Screen>
      <AppStack.Screen name="Education Details">
        {({ navigation }) => <EducationEdit navigation={navigation} />}
      </AppStack.Screen>
      <AppStack.Screen name="User Settings">
        {({ navigation }) => <UserSettings navigation={navigation} />}
      </AppStack.Screen>
      <AppStack.Screen name="Skills Edit Details">
        {({ navigation }) => <SkillsView navigation={navigation} />}
      </AppStack.Screen>
      <AppStack.Screen name="Roles Edit Details">
        {({ navigation }) => <RolesView navigation={navigation} />}
      </AppStack.Screen>
    </AppStack.Navigator>

  );
}

export default ProfileNavigator;
