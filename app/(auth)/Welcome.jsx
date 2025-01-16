import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';


export default function HomeScreen() {

  return (
            <SafeAreaView style={[styles.full, {backgroundColor: '#041E42'}]}>
              <ScrollView>
                <View style={styles.container}>
                    <Text style={[styles.header, {color: 'white'}]}>IMDI ACCESS CODE GENERATOR
                      <View>
                        <Text style={[styles.caption, {color: 'white'}]}>Maximum and Efficient Security</Text>
                      </View>
                    </Text>

                  <CustomButton
                title="Get Started"
                handlePress={() => router.push('/SignUp')}
                 />
                </View>
              </ScrollView>
              <StatusBar backgroundColor='#041E42' style='light'/>
            </SafeAreaView>
            
      );
    }
    
const styles = StyleSheet.create({
  full: {
    height: "100%",
    flex: 1,
  },
  container: {
    width: "100%",
    height: "100%",
    marginTop: 30,
    top: '200%',
  },
  header: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: 'center',
  },
  caption: {
    fontSize: 15,
  }
});