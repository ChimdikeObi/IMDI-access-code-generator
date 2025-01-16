import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import FormField from '../../components/Formfield'
import CustomButton from '../../components/CustomButton'
// import Message from '../../components/Message'

const ContactUs = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#041E42', height: '100%'}}>
      <ScrollView>
        <View style={{marginLeft: 10}}>
          <Text style={{color: '#fff', fontWeight: 600, fontSize: 32,}}>Contact Us</Text>
          <Text style={{color : '#fff'}}>How can we help you?</Text>
        </View>

          <FormField 
          title='Your Name'
          />
          <FormField 
          title='Your email'
          />
          <FormField 
          title='Subject'
          />
          {/* <Message /> */}
          <CustomButton 
          title='Submit'
          />
      </ScrollView>
      <StatusBar backgroundColor='#041E42' style='light' />
    </SafeAreaView>
  )
}

export default ContactUs

const styles = StyleSheet.create({})