import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Message = ({ title, value, style, placeholder, handleChangeText, ...props }) => {
return (
<View style={styles.space} >
      <Text style={styles.text}>{title}</Text>
      
      <View style={styles.input}>
         <TextInput style={styles.info} 
         value={value} 
         placeholder={placeholder}
         placeholderTextColor='#7b7b8b'
         onChangeText={handleChangeText}
         secureTextEntry={title === 'Password' && !showPassword}
         />
         
         {title ==='Password'  && (
            <TouchableOpacity onPress={() =>
               setshowPassword(!showPassword)}>
                  <Image source={!showPassword ? icons.eye :
                     icons.eyeHide} 
                     style={{ width: 24, height: 24, }} 
                     resizeMode='contain' 
                  />
            </TouchableOpacity>
         )}

         {title ==='Confirm Password'  && (
            <TouchableOpacity onPress={() =>
               setshowPassword(!showPassword)}>
                  <Image source={!showPassword ? icons.eye :
                     icons.eyeHide} 
                     style={{ width: 24, height: 24, }} 
                     resizeMode='contain' 
                  />
            </TouchableOpacity>
         )}
      </View>
    </View>
)
}

export default Message

const styles = StyleSheet.create({
   space: {
      gap: 5,
      marginTop: 25,
   },
   input: {
      borderWidth: 2,
      borderColor: '#d3d3d3',
      width: "95%",
      height: 164,
      backgroundColor: "#fff",
      borderRadius: 5,
      paddingLeft: 16,
      paddingRight: 16,
      alignItems: 'center',  
      flexDirection: "row",
      margin: 'auto',
   },
   info: {
      flex: 1,
      color: 'black',
      fontWeight: 400,
      fontSize: 15,
   },
   text: {
      marginLeft: 10,
      color: '#fff',
      fontSize: 15,
      
   }
})



