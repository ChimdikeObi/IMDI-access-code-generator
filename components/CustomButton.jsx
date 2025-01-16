import { TouchableOpacity, StyleSheet, Text,} from 'react-native'
import React from 'react';



const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
   
    <TouchableOpacity style={[styles.bg, {backgroundColor: 'yellow'}]} 
    onPress={handlePress}
    activeOpacity={0.7}
    className={`${containerStyles} $ {isLoading ? 'opacity-50' : ''}`}
    disabled={isLoading}>
      <Text style={[styles.text, {color: '#041E42'}]} className={`${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  bg: {
    borderRadius: 5,
    minHeight: 62,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
    width: 250,
    margin: 'auto',
  },
  text: {
    fontWeight: 700,
    fontSize: 20,
  },
})