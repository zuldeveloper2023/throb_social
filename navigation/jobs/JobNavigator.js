import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import JobsHome from '../../screens/jobs/JobsHome';

const AppStack = createStackNavigator();

const JobNavigator = () => {
  return (
   
    <AppStack.Navigator>
      <AppStack.Screen name="Jobs" options={{headerShown:false}}>
        {({ navigation }) => <JobsHome navigation={navigation} />}
      </AppStack.Screen>
     
      
    </AppStack.Navigator>
    
  );
}

export default JobNavigator;
