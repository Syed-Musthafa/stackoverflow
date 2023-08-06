import React, {Component} from 'react';
import { View, Button, StyleSheet, Image} from 'react-native';

import icon from '../exports/icon';


const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Home');
  }, 3000);
  
  return (
     <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
        <Image 
          source={icon.react}
          style={{ width: 100, height: 100}}
        />
     </View>

    
  );
};

export default SplashScreen;