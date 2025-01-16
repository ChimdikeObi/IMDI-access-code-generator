import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import FormField from '../../components/Formfield'
import CustomButton from '../../components/CustomButton'
import { Link, router, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const FPassword = () => {
  const [form, setform] = useState({
  email: '',
  })

  const [isSubmitting, setisSubmitting] = useState(false)
  const submit = () => {
  }

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#041E42'}}>
      <ScrollView>
        <View>
          <Text style={{
            color: '#fff',
            fontSize: 30,
            fontWeight: 500,
          }}>
            Forgot Password
          </Text>
          <Text style={{
            color: '#fff',
            fontWeight: '300',
            marginTop: 20,
          }}>Enter your email and we'll send a link to reset your password</Text>

          <Stack>
            <Stack.Screen 
            name='FPassword'
            options={{
              headerShown: false
            }}
            />
          </Stack>

        <View>
          <FormField 
          title='Email Address'
          value={form.email}
          handleChangeText={(e) => setform({ ...form, email: e })}
          keyboardType='email address'
          />
          <CustomButton 
          title='Send Verification Code'
          handlePress={() => router.push()}
          isLoading={isSubmitting}
          />
        </View>
        <View>
        <Link href={('/SignIn')} style={{
          color: 'yellow',
          textAlign: 'center',
          marginTop: 10,
          }}><Text>Back to Login</Text></Link>
        </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#041E42' style='light'/>
    </SafeAreaView>
  )
}

export default FPassword
const styles = StyleSheet.create({})