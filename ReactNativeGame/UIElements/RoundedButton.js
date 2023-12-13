import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constans/colors';

const RoundedButton = ({children, onPress}) => {
  return (
    <View style={styles.outerContainer}>
        <Pressable
            style={styles.innerContainer}
            android_ripple={{color: 'darkpurple'}}
            onPress={onPress}>
            <Text style={styles.textStyles}>{children}</Text>
        </Pressable>
    </View>
  )
}

export default RoundedButton

const styles = StyleSheet.create({
    outerContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    innerContainer:{
        backgroundColor:'#52073c',
        paddingVertical: 16,
        paddingHorizontal: 24,
        elevation: 2,
    },
    textStyles:{
        fontSize: 18,
        color: Colors.accent500,
        textAlign: 'center',
        fontFamily: 'open-sans'
    }
})