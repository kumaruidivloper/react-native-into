import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styleObj } from '../App.style.js';

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <View style={ styleObj.box1 }></View>
        <View style={ styleObj.box2 }></View>
        <View style={ styleObj.box3 }></View>
      </SafeAreaView>
    </SafeAreaProvider>
  ) 
}





