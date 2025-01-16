import { StyleSheet, Text, View, } from 'react-native';
import React, { useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Home = () => {
  const [code, setCode] = useState('');

  const generateCode = (length = 4) => { //Length of the code
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // Code selections
    let newCode = '';
    for (let i = 0; i < length; i++) {
      newCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCode(newCode);
    
  };

useEffect(() => {
  generateCode(); // Generate code on page load
  const interval = setInterval(generateCode, 86400000); // Generate code every 24 hours
  return () => clearInterval(interval); // Cleanup interval on unmount
}, []);

  return (    
  <SafeAreaView style={{height: '100%', backgroundColor: '#041E42'}}>
    <View style={{backgroundColor: '#041E42'}}>
      <View style={styles.header}>
      <Text style={{color: '#fff',
      fontSize: 20,
      fontWeight: 900,}}>imdi</Text>
      <Link
      href={'/screens/Notifications'}>
      <FontAwesome 
        name='bell'
        size={20}
        color='white'/></Link>
    </View>
        <View style={{
          justifyContent: 'center',
          textAlign: 'center',
        }}>
          <Text style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: 600,
            fontSize: 20,
            marginTop: 300,
            textTransform: 'uppercase',
            }}>Dele Adedugbe Estate Code Generator</Text>

            <Text style={{
              color: '#041E42',
              marginTop: 40,
              fontSize: 20,
              textAlign: 'center',
              fontWeight: 500,
              backgroundColor: 'yellow',
              padding: 10,
              width: 250,
              margin: 'auto',
              borderRadius: 5,
            }}><>Access Code:</> {code}</Text>
        </View>

    </View>
    <StatusBar backgroundColor='#041E42' style='light' />
   </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 5,
    display: 'flex',
    justifyContent: 'space-between',
    gap: 400,
    margin: 'auto',
  },
})