import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Node, ReactNative, ReactPage,  } from '../pages';
import IconHolder from '../components/IconHolder';
import icon from '../exports/icon';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
    screenOptions={
      {
        
        tabBarStyle:  { height: 60 },
        tabBarLabelStyle : { marginBottom:10 }
       
      } 
    }
    
    >
    <Tab.Screen name="React" component={ReactPage} 
    options={{
      tabBarIcon: ({color, size}) => {
       return (
         <IconHolder source={icon.react}  />
       )}
    }}
    />
      <Tab.Screen name="React Native" component={ReactNative} 
       options={{
        tabBarIcon: ({color, size}) => {
         return (
           <IconHolder source={icon.react_native}  />
         )}
      }}
      />
      <Tab.Screen name="Node" component={Node} 
       options={{
        tabBarIcon: ({color, size}) => {
         return (
           <IconHolder source={icon.node}  />
         )}
      }}
      />
    </Tab.Navigator>
  )
}

export default Tabs