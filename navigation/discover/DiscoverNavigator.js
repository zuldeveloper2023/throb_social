import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Discover from '../../screens/discover/Discover';

const AppStack = createStackNavigator();

const DiscoverNavigator = () => {
  return (
   
    <AppStack.Navigator>
      <AppStack.Screen name="Discover" options={{headerShown:false}}>
        {({ navigation }) => <Discover navigation={navigation} />}
      </AppStack.Screen>
     
      
    </AppStack.Navigator>
    
  );
}

export default DiscoverNavigator;
