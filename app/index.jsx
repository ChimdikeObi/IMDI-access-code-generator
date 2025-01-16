import { StyleSheet, Text, View } from 'react-native'
import React from 'react' 
// import { ThemeContext } from './util/ThemeContext';
import RootStack from './navigator/RootStack';
// import { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { Stack } from 'expo-router';
import { createStackNavigator } from '@react-navigation/stack';
// import Welcome from './(auth)/Welcome';
 import SignUp from './(auth)/SignUp';
// import SignIn from './(auth)/SignIn';
// import Home from './(tabs)/Home';
// import Profile from './(tabs)/Profile';
// import Notifications from './(tabs)/Notifications';
// import Settings from './screens/Settings';
// import Layout from './(tabs)/_layout';
// import CustomButton from '../components/CustomButton';

const Stack = createStackNavigator();

const RootLayout = () => {

  return (
  <RootStack />
  
  )
}

export default RootLayout

const styles = StyleSheet.create({})