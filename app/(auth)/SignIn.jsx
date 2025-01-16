import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {  Link, router, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import FormField from '../../components/Formfield';
import CustomButton from '../../components/CustomButton'
import { useState } from 'react';

export default function SignIn () {

  const [form, setform] = useState({
    email: '',
    password: '',
  })

  const [isSubmitting, setisSubmitting] = useState(false)
  const submit = () => {

  }

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#041E42'}}>
    <ScrollView>
      <View style={styles.view}>
        <Text style={{fontWeight: 600, fontSize: 30, color: '#fff'}}>Log in to imdi</Text>
      <Stack>
        <Stack.Screen 
          name='sign-in'
          options={{
          headerShown: false
          }}
          />
      </Stack>

      <FormField 
        title='Email Address'
        value={form.email}
        handleChangeText={(e)=> setform({ ...form, email: e })}
        keyboardType='email-address'
        />

        <FormField 
        title='Password'
        value={form.password}
        handleChangeText={(e)=> setform({ ...form, password: e })}
        />

        <CustomButton
        title="Sign In"
        handlePress={() => router.push('/Home')}
        isLoading={isSubmitting}
        />
      <View style={styles.inquiry}>
        <Text><Link href={('/screens/FPassword')} style={styles.link}>Forgot Password?</Link></Text>
      </View>
      </View>

    </ScrollView>
    <StatusBar backgroundColor='#041E42' style='light'/>
  </SafeAreaView>  
)}

const styles = StyleSheet.create({
view: {
  height: '100%',
  top: '50%',
},
inquiry: {
  marginTop: 10,
},
link: {
  color: 'yellow',
  textAlign: 'center',
  fontSize: 17,
}
})