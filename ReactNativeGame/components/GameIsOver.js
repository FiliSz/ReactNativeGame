import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import Colors from '../constans/colors';

const GameIsOver = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
         <Text style={styles.textStyles}>{`GAME IS OVER! \nTRY AGAIN`}</Text>
      </View>   
      <View style={styles.imageContainer}>
         <Image style={styles.imageStyles} source={require('../assets/goal-game-over.png')} />
      </View>
    </View>
  )
}

export default GameIsOver

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 24,
    },
    imageContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    imageStyles:{
        height: 250,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        padding: 12,
        borderWidth: 4,
        borderRadius: 20,
        borderColor: 'white',
        overflow: 'hidden',
    },
    textStyles:{
        fontSize: 32,
        fontFamily: 'open-sans-bold',
        color: 'white',
        textAlign: 'center',
        
    }
})