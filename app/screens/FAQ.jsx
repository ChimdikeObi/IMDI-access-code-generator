import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { router } from 'expo-router'
import Search from '../../components/Search'

const FAQ = () => {
  return (
   <SafeAreaView style={{backgroundColor: '#041E42', flex: 1}}>
      <View style={{flexDirection: 'row',
         display: 'flex',
         padding: 10,
         gap: 70,
         backgroundColor: '#041E34',
         
      }}>
         <View style={{justifyContent: 'center'}}>
            <TouchableOpacity
            onPress={() => {
               router.push('/screens/Settings')
            }}
            ><FeatherIcon 
            name='arrow-left' 
            size={23}
            style={{color: '#fff'}} />
            </TouchableOpacity>

         </View>
         <View>
            <Text style={{color: '#fff', fontSize: 23, fontWeight: 600}}>Frequently Asked Questions</Text>
         </View> 
      </View>
      <ScrollView>
      <View style={{
         marginLeft: 28,
      }}>
         <Text style={{
            color: '#fff', 
            fontSize: 25,
            marginTop: 25,
            fontWeight: 600,
            lineHeight: 30,
            }}>
            We're here to assist you with problems you may have concerning 
            <Text style={{color: 'yellow', fontWeight: 900}}> imdi
            </Text>
         </Text>

         <Text style={{
            color: '#fff',
            fontSize: 15,
            marginTop: 10,
            fontWeight: 400,
            lineHeight: 22,
            
            }}>
         imdi Access Code Generator is a software tool designed to create unique, 
         secure codes used for controlling access to digital systems, events, or restricted areas. 
         We provide maximum security and efficiency. 
         </Text>

         <Search />

         <Text style={{
            color: 'yellow',
            fontSize: 20,
            fontWeight: 600,
            marginTop: 30,
            paddingBottom: 10,
         }}>FAQ</Text>

         <View style={styles.section}>
            <View style={[styles.row, { backgroundColor: '#041E42' } ]}>
               <Text style={[styles.rowLabel, { color: 'white' }]}>How do access code generators work?</Text>
                  <TouchableOpacity
                     onPress={() => {
                        
                     }}>
                     <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
                        <FeatherIcon name='plus' size={20} style={{color: '#fff'}} /> 
                     </View>
                  </TouchableOpacity>

            <View style={styles.rowSpacer} />      
            </View>
         </View>

         <View style={styles.section}>
            <View style={[styles.row, { backgroundColor: '#041E42' } ]}>
               <Text style={[styles.rowLabel, { color: 'white' }]}>Are access code generators secure?</Text>
                  <TouchableOpacity
                     onPress={() => {
                        
                     }}>
                     <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
                        <FeatherIcon name='plus' size={20} style={{color: '#fff'}} /> 
                     </View>
                  </TouchableOpacity>

            <View style={styles.rowSpacer} />      
            </View>
         </View>

         <View style={styles.section}>
            <View style={[styles.row, { backgroundColor: '#041E42' } ]}>
               <Text style={[styles.rowLabel, { color: 'white' }]}>Is there a limit to the number of codes that can be generated?</Text>
                  <TouchableOpacity
                     onPress={() => {
                        
                     }}>
                     <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
                        <FeatherIcon name='plus' size={20} style={{color: '#fff'}} /> 
                     </View>
                  </TouchableOpacity>

            <View style={styles.rowSpacer} />      
            </View>
         </View>

         <View style={styles.section}>
            <View style={[styles.row, { backgroundColor: '#041E42' } ]}>
               <Text style={[styles.rowLabel, { color: 'white' }]}>What types of access codes can be generated?</Text>
                  <TouchableOpacity
                     onPress={() => {
                        
                     }}>
                     <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
                        <FeatherIcon name='plus' size={20} style={{color: '#fff'}} /> 
                     </View>
                  </TouchableOpacity>

            <View style={styles.rowSpacer} />      
            </View>
         </View>

         <View style={styles.section}>
            <View style={[styles.row, { backgroundColor: '#041E42' } ]}>
               <Text style={[styles.rowLabel, { color: 'white' }]}>What are common use cases for access code generators?</Text>
                  <TouchableOpacity
                     onPress={() => {
                        
                     }}>
                     <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
                        <FeatherIcon name='plus' size={20} style={{color: '#fff'}} /> 
                     </View>
                  </TouchableOpacity>

            <View style={styles.rowSpacer} />      
            </View>
         </View>

         <View style={styles.section}>
            <View style={[styles.row, { backgroundColor: '#041E42' } ]}>
               <Text style={[styles.rowLabel, { color: 'white' }]}>How do I use an access code for two-factor authentication (2FA)?</Text>
                  <TouchableOpacity
                     onPress={() => {
                        
                     }}>
                     <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
                        <FeatherIcon name='plus' size={20} style={{color: '#fff'}} /> 
                     </View>
                  </TouchableOpacity>

            <View style={styles.rowSpacer} />      
            </View>
         </View>

         <View style={styles.section}>
            <View style={[styles.row, { backgroundColor: '#041E42' } ]}>
               <Text style={[styles.rowLabel, { color: 'white' }]}>Can access codes be reused?</Text>
                  <TouchableOpacity
                     onPress={() => {
                        
                     }}>
                     <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
                        <FeatherIcon name='plus' size={20} style={{color: '#fff'}} /> 
                     </View>
                  </TouchableOpacity>

            <View style={styles.rowSpacer} />      
            </View>
         </View>

         <View style={styles.section}>
            <View style={[styles.row, { backgroundColor: '#041E42' } ]}>
               <Text style={[styles.rowLabel, { color: 'white' }]}>Are there free access code generator tools?</Text>
                  <TouchableOpacity
                     onPress={() => {
                        
                     }}>
                     <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
                        <FeatherIcon name='plus' size={20} style={{color: '#fff'}} /> 
                     </View>
                  </TouchableOpacity>

            <View style={styles.rowSpacer} />      
            </View>
         </View>

         <View style={styles.section}>
            <View style={[styles.row, { backgroundColor: '#041E42' } ]}>
               <Text style={[styles.rowLabel, { color: 'white' }]}>Can access code generators be customized?</Text>
                  <TouchableOpacity
                     onPress={() => {
                        
                     }}>
                     <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
                        <FeatherIcon name='plus' size={20} style={{color: '#fff'}} /> 
                     </View>
                  </TouchableOpacity>

            <View style={styles.rowSpacer} />      
            </View>
         </View>

         <View style={styles.section}>
            <View style={[styles.row, { backgroundColor: '#041E42' } ]}>
               <Text style={[styles.rowLabel, { color: 'white' }]}>Is there a limit to the number of codes that can be generated?</Text>
                  <TouchableOpacity
                     onPress={() => {
                        
                     }}>
                     <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
                        <FeatherIcon name='plus' size={20} style={{color: '#fff'}} /> 
                     </View>
                  </TouchableOpacity>

            <View style={styles.rowSpacer} />      
            </View>
         </View>
      </View>
      </ScrollView>

      <View style={{
         backgroundColor: '#041E34'
      }}>
         <Text style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 500,
         }}>Still Stuck? Help is a mail away!</Text>
         <View style={{
            marginBottom: 30,
            }}>
         
         </View>
      </View>


      <StatusBar backgroundColor='#041E34' style='light'/>
   </SafeAreaView>
  )
}

export default FAQ

const styles = StyleSheet.create({

   row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 60,
      borderRadius: 8,
      marginBottom: 15,  
     },

 rowIcon: {
   width: 32,
   height: 32,
   borderRadius: 9999,
   marginRight: 12,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
 },
 rowLabel: {
   fontSize: 17,
   fontWeight: '400',
   color: '#0c0c0c',
   width: '90%',
   // backgroundColor: 'yellow',
 },
 rowSwitch: {
   fontSize: 17,
   fontWeight: '400',
   color: '#0c0c0c',
   // backgroundColor: 'yellow',
 },
 rowSpacer: {
   flexGrow: 1,
   flexShrink: 1,
   flexBasis: 0,
 },
})