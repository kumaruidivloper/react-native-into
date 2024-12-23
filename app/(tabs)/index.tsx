import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ProfileCard } from '../../components/ProfileCard'

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center'}}>
        <ProfileCard></ProfileCard>
      </SafeAreaView>
    </SafeAreaProvider>
  ) 
}





