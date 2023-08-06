import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { Node, ReactNative, ReactScreen } from './src/pages';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconHolder from './src/components/IconHolder';
import icon from './src/exports/icon';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './src/store';
import Route from './src/navigation/Route';



export default function App() {



  return (
    <Provider store={store}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
