import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constans/colors';

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container:{
        height: 100,
        padding: 24,
        margin: 24, 
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.accent500, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary600,
        overflow: 'hidden'

    },
    numberText:{
        color: Colors.accent500,
        fontSize: 36,
        fontFamily: 'open-sans-bold',
    }
})