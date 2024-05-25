import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Discover from '../../screens/discover/Discover';
import ConnectionHome from '../../screens/connections/ConnectionHome';

const AppStack = createStackNavigator();

const ConnectionNavigator = () => {
  return (
   
    <AppStack.Navigator>
      <AppStack.Screen name="Connections" options={{headerShown:true}}>
        {({ navigation }) => <ConnectionHome navigation={navigation} />}
      </AppStack.Screen>
     
      
    </AppStack.Navigator>
    
  );
}

export default ConnectionNavigator;
