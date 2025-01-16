import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Create = () => {

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#041E42'}}>
    <View>
      <Text style={{color: '#fff'}}>create</Text>
    </View>
    <StatusBar backgroundColor='#041E42' style='light'/>
    </SafeAreaView>
  )
}

export default Create

const styles = StyleSheet.create({})