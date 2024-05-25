import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import ProfileNavigator from '../navigation/ProfileNavigator';
import DiscoverNavigator from '../navigation/discover/DiscoverNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import ConnectionNavigator from '../navigation/connections/ConnectionNavigator';
import JobNavigator from '../navigation/jobs/JobNavigator';
import HomeNavigator from '../navigation/home/HomeNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {

    return (

        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor:'gray'
          }} detachInactiveScreens={false}>
            
           
           <Tab.Screen name="Home" component={HomeNavigator}  
                options={{
                    headerShown:false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                    )
                }} />
             <Tab.Screen name="Discover" component={DiscoverNavigator}  
                options={{
                    headerShown:false,
                    tabBarLabel: 'Discover',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="explore" color={color} size={size} />
                    )
                }} />
            <Tab.Screen name="Connections" component={ConnectionNavigator}  
                options={{
                    headerShown:false,
                    tabBarLabel: 'Connections',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="explore" color={color} size={size} />
                    )
                }} />
           
           <Tab.Screen name="Jobs" component={JobNavigator}
                options={{
                    tabBarLabel: 'Jobs',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name="dharmachakra" color={color} size={size} />
                    )
                }} />
            <Tab.Screen name="Profile" component={ProfileNavigator}
                options={{
                    headerShown:false,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <SimpleLineIcons name="user" color={color} size={size} />
                    )
                }} />

            
        </Tab.Navigator>
    );
}