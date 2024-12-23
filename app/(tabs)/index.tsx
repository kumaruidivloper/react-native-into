import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styleObj } from '../App.style.js';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <Text style={styleObj.title}>Shutup Krishaanvvv !</Text>
      <View style={styleObj.square}>
         <Text style={styleObj.innerTxt}>Super!</Text>
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  ) 
}





