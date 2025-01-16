import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import FormField from '../../components/Formfield';
import CustomButton from '../../components/CustomButton'
import React, { useState } from 'react';


export default function SignUp() {
  const [form, setform] = useState({
    name: '',
    email: '',
    address: '',
    password: '',
    confirmpassword: '',
  })

  const [isSubmitting, setisSubmitting] = useState(false)
  const submit = () => {

  }

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#041E42'}}>
      <ScrollView>
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: 600, color: '#fff'}}>Sign Up</Text>

      <Stack>
        <Stack.Screen
        name='sign-up'
        options={{
          headerShown: 'false'
        }}
        />
      </Stack>

      <FormField 
      title='Name'
      value={form.name}
      handleChangeText={(e) => setform({ ...form, name: e })}
      />

      <FormField 
      title='Email Address'
      value={form.email}
      handleChangeText={(e) => setform({ ...form, email: e })}
      keyboardType='email-address'
      />

      <FormField 
      title='House Address'
      value={form.address}
      handleChangeText={(e) => setform({ ...form, address: e })}
      />

      <FormField 
      title='Password'
      value={form.password}
      handleChangeText={(e) => setform({ ...form, password: e })}
      />

      {/* <FormField 
      title='Confirm Password'
      value={form.cpassword}
      handleChangeText={(e) => setform({ ...form, cpassword: e })}
      /> */}

      <CustomButton
      title='Sign Up'
      handlePress={() => router.push('/Home')}
      isLoading={isSubmitting}
      />
      <View style={styles.inquiry}>
              <Text style={styles.question}>Have an account? <Link href={('/SignIn')} style={styles.link}>Log in</Link></Text>
      </View>
    </View>
    </ScrollView>
    <StatusBar backgroundColor='#041E42' style='light'/>
   </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
   container: {
    height: "100%",
    top: '10%',
  },
  
  question: {
    textAlign: 'center',
    fontSize: 17,
    marginTop: 10,
    color: 'grey',
  },
  link: {
    color: 'yellow',
  }
});
