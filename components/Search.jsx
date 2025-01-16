import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';


const Search = () => {
  return (
    <View style={{
      flexDirection: 'row',
      display: 'flex',
      width: '95%',
      backgroundColor: '#fff',
      borderRadius: 30,
      paddingLeft: 20,
      marginTop: 20,
      padding: 5,
    }}>
      <View style={{ justifyContent: 'center'}}>
      <FontAwesome name='search' 
      size={20} style={{color: 'black'}} />
      </View>
      <View>
      <TextInput style={{
         flex: 1,
         marginLeft: 10,
      }}
      placeholder='Search help...'
      placeholderTextColor='#7b7b8b'/>
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})