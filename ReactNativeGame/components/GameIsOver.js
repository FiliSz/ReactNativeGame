import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react';
import Colors from '../constans/colors';
import RoundedButton from '../UIElements/RoundedButton';

const GameIsOver = ({numberOfRounds, newGameHandler}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
         <Text style={styles.textStyles}>GAME IS OVER!</Text>
      </View>   
      <View style={styles.imageContainer}>
         <Image style={styles.imageStyles} source={require('../assets/goal-game-over.png')} />
      </View>
      <View style={[styles.textContainer, styles.downTextContainer]}>
        <Text style={[styles.textStyles, styles.downTextStyles]}>Number of rounds: {numberOfRounds}</Text>
      </View>
      <RoundedButton onPress={newGameHandler}>New Game</RoundedButton>
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
        marginVertical: 60,
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
        marginTop: 70,
        padding: 12,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'white',
        overflow: 'hidden',
    },
    downTextContainer:{
        marginTop: 0,
        marginBottom: 40,
        borderWidth: 2,
    },
    textStyles:{
        fontSize: 32,
        fontFamily: 'open-sans-bold',
        color: 'white',
        textAlign: 'center',
        
    },
    downTextStyles:{
        fontSize: 24,
    }
})