import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../(auth)/Welcome';
import SignUp from '../(auth)/SignUp';
import SignIn from '../(auth)/SignIn';
import Profile from '../(tabs)/Profile';
import Layout from '../(tabs)/_layout';
import Home from '../(tabs)/Home';
import FPassword from '../screens/FPassword';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';
import ContactUs from '../screens/ContactUs';
import FAQ from '../screens/FAQ';
import Search from '../../components/Search';

// import { Stack } from 'expo-router';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerStyle: {backgroundColor: '#041E42'}, headerShown: false}}>
        {/* Authentication Flow */}
        <Stack.Screen name="Welcome" component={Welcome} />

        {/* Main App Flow */}
       <Stack.Screen name='Sign Up' component={SignUp} />
       <Stack.Screen name='Settings' component={Settings} />
       <Stack.Screen name='Sign In' component={SignIn} />
       <Stack.Screen name='Home' component={Home} />
       <Stack.Screen name='Profile' component={Profile} />
       <Stack.Screen name='Notifications' component={Notifications} />
       <Stack.Screen name='Layout' component={Layout} />
       <Stack.Screen name='Fpassword' component={FPassword} />
       <Stack.Screen name='Contact Us'component={ContactUs} />
       <Stack.Screen name='FAQ' component={FAQ}/>
       <Stack.Screen name='Search' component={Search}/>
      </Stack.Navigator>
    
  );
}
