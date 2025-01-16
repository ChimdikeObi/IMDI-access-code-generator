// import { Link } from 'expo-router';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Switch,
  
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';


const Settings =() => {
  const [isActive, setisActive] = useState(false)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#041E42' }}>
      <ScrollView>
        <View style={{flexDirection: 'row',
           display: 'flex', 
           padding: 10,
           gap: 30
           }}>
        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity
          onPress={() => {
            router.push('/(tabs)/Profile')
          }}>
          <FeatherIcon name='arrow-left' size={20} style={{color: 'white' }}  />
          </TouchableOpacity>
        </View>
          <View>
          <Text style={{color: '#fff', fontSize: 23, fontWeight: 600}}>Settings</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          {/* LANGUAGE */}
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={[styles.row, { backgroundColor: '#041E42' } ]}>

            <View style={[styles.rowIcon, { backgroundColor: '##041E42' }]}>
              <FeatherIcon name="globe" size={20} style={{color: '#fff'}} />
            </View>
            <Text style={[styles.rowLabel, { color: 'white' }]}>Language</Text>
            <View style={styles.rowSpacer} />
            
          </TouchableOpacity>
          {/* LOCATION */}
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={[styles.row, { backgroundColor: '#041E42' } ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
              <FeatherIcon
                name="map-pin"
                size={20} 
                style={{color: '#fff'}}/>
            </View>
            <Text style={[styles.rowLabel, { color: 'white' }]}>Location</Text>
            <View style={styles.rowSpacer} />
          </TouchableOpacity>
          {/* DARK MODE */}
          <View style={[styles.row, { backgroundColor: '##041E42' } ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
              <FeatherIcon name="moon" size={20} style={{color: '#fff'}} />
            </View>
            <Text style={[styles.rowSwitch, { color: 'white' }]}>Dark Mode</Text>
            <View style={styles.rowSpacer} />
            <Switch
            value={isActive}
              />
          </View>
          {/* EMAIL */}
          <View style={[styles.row, { backgroundColor: '#041E42' } ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
              <FeatherIcon name="mail" size={20} style={{color: '#fff'}} />
            </View>
            <Text style={[styles.rowSwitch, { color: 'white' }]}>Email Notifications</Text>
            <View style={styles.rowSpacer} />
            <Switch 
            value={isActive}
            />
            {/* <Switch
              onValueChange={emailNotifications =>
                setForm({ ...form, emailNotifications })
              }
              value={form.emailNotifications} /> */}
          </View>
          {/* PUSH NOTIFICATIONS */}
          <View style={[styles.row, { backgroundColor: '#041E42' } ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
              <FeatherIcon name="bell" size={20} style={{color: '#fff'}} />
            </View>
            <Text style={[styles.rowSwitch, { color: 'white' }]}>Push Notifications</Text>
            <View style={styles.rowSpacer} />
            <Switch 
            value={isActive}
            />
            {/* <Switch
              onValueChange={pushNotifications =>
                setForm({ ...form, pushNotifications })
              }
              value={form.pushNotifications} /> */}
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resources</Text>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={[styles.row, { backgroundColor: '#041E42' } ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
              <FeatherIcon  name="flag" size={20} style={{color: '#fff'}} />
            </View>
            <Text style={[styles.rowLabel, { color: 'white' }]}>Report Bug</Text>
            <View style={styles.rowSpacer} /> 
            
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('/screens/ContactUs')
              }
            style={[styles.row, { backgroundColor: '#041E42' } ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
              <FeatherIcon name="phone" size={20} style={{color: '#fff'}} />
            </View>
            <Text style={[styles.rowLabel, { color: 'white' }]}>Contact Us</Text>
            <View style={styles.rowSpacer} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push('/screens/FAQ')
            }
            style={[styles.row, { backgroundColor: '#041E42' } ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
              <FeatherIcon  name="help-circle" size={20} style={{color: '#fff'}} />
            </View>
            <Text style={[styles.rowLabel, { color: 'white' }]}>FAQ</Text>
            <View style={styles.rowSpacer} />
            
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={[styles.row, { backgroundColor: '#041E42' } ]}>
            <View style={[styles.rowIcon, { backgroundColor: '#041E42' }]}>
              <FeatherIcon name="star" size={20} style={{color: '#fff'}} />
            </View>
            <Text style={[styles.rowLabel, { color: 'white' }]}>Rate in Google Play Store</Text>
            <View style={styles.rowSpacer} />
            
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#041E42' style='light'/>
    </SafeAreaView>
  );
}

export default Settings

const styles = StyleSheet.create({
  /** Section */
  section: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  /** Row */
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
});