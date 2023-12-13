import { Alert, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import RoundedButton from '../UIElements/RoundedButton'
import NumberContainer from '../UIElements/NumberContainer';
import Colors from '../constans/colors';

function generateRandomNumber(min, max, exclude){
    const randomNumber = Math.floor(Math.random() * (max -min)) + min;

    if (randomNumber === exclude){
        return generateRandomNumber(min, max, exclude);
    }else{
        return randomNumber
    }
}

let minBoundary = 1;
let maxBoundary = 100;


const GameScreen = ({userNumber, onGameOver}) => {
    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    
    const [guessTable, setGuessTable] = useState({
        item: [{ index: 1, value: initialGuess }],
      });
    

    const guessTableLength = guessTable.item.length;

    useEffect(()=>{
        console.log("Checking for game over...", currentGuess, userNumber);
        if (currentGuess == userNumber) {
            console.log("Game over condition met. Calling onGameOver...");
            onGameOver(guessTable.item[0].index);
            
  }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
      }, []);
      
    function nextGuessHandler(direction){
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
          ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
              { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
          }
          if(direction === 'lower'){
            maxBoundary = currentGuess;
          }else{
            minBoundary = currentGuess + 1;
          }

          const newRndNumber = generateRandomNumber(
            minBoundary,
            maxBoundary,
            currentGuess
          );
          
          setCurrentGuess(newRndNumber);
          setGuessTable((prevGuessValue) => ({
            item: [{ index: guessTableLength + 1, value: newRndNumber }, ...prevGuessValue.item],
          }));
          console.log(guessTable.item[0].index);
          
    }
        
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.textStyles}>Opponent's Guess</Text>
        </View>
        <NumberContainer>{currentGuess}</NumberContainer> 
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <RoundedButton onPress={nextGuessHandler.bind(this, 'lower')}>Lower</RoundedButton>
            </View>
            <View style={styles.buttonContainer} >
                <RoundedButton onPress={nextGuessHandler.bind(this, 'greater')}>Higher</RoundedButton>
            </View>   
        </View>
        <View style={styles.firstFlatListStyles}>
            <View style={styles.firstFlatListContainer}>
                <Text style={styles.firstFlatListElement}>Round</Text>
            </View>
            <View style={styles.firstFlatListContainer}>
                <Text style={styles.firstFlatListElement}>Value</Text>
            </View>
          
        </View>
        <FlatList data={guessTable.item}  renderItem={({ item }) => (
        <View style={styles.flatListStyles}>
            <View style={styles.flatListContainer}>
                <Text style={styles.flatListElement}>{item.index}</Text>
            </View>
            <View style={styles.flatListContainer}>
                <Text style={styles.flatListElement}>{item.value}</Text>
            </View>
          
        </View>
      )} />
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    container:{
        marginVertical: '150',
        flex: 1,
        padding: 24,
    },
    titleContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: '100%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 100,
    },
    textStyles:{
        fontSize: 24,
        color: 'white',
        fontFamily: 'open-sans-bold',
        padding: 12,
    },
    buttonsContainer:{
        flexDirection: 'row'
    },
    buttonContainer:{
        flex: 1,
    },
    flatListStyles:{
        flexDirection: 'row',
        marginTop: 10,
    },
    flatListContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        borderRadius: 20,
        width: '50%',
        height: 50,
        backgroundColor: Colors.primary500,
    },
    flatListElement:{
        padding: 10,
        color: Colors.accent500,
    },
    firstFlatListElement:{
        padding: 10,
        color: Colors.primary500
        
    },
    firstFlatListContainer:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: Colors.primary500,
        borderRadius: 20,
        width: '50%',
        height: 50,
        backgroundColor: Colors.accent500,
    },
    firstFlatListStyles:{
        flexDirection:'row',
        marginTop: 15,
    }

})