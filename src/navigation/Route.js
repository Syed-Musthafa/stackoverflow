import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import SplashScreen from '../pages/SplashScreen';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    initialRouteName={"SplachScreen"}
   >
 <Stack.Screen name="SplashScreen" component={SplashScreen} />
       <Stack.Screen name="Home" component={Tabs}/>

   </Stack.Navigator>
  )
}

export default Route