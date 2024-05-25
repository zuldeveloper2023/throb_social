import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import JobsHome from '../../screens/jobs/JobsHome';
import HomeCentral from '../../screens/home/HomeCentral';

const AppStack = createStackNavigator();

const HomeNavigator = () => {
  return (
   
    <AppStack.Navigator>
      <AppStack.Screen name="Home" options={{headerShown:true}}>
        {({ navigation }) => <HomeCentral navigation={navigation} />}
      </AppStack.Screen>
     
      
    </AppStack.Navigator>
    
  );
}

export default HomeNavigator;
