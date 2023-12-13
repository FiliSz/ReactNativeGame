import { Text, View, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import RoundedButton from '../UIElements/RoundedButton';
import Colors from '../constans/colors';

function StartGameScreen({onPickNumber}) {
    const [yourNumber, setYourNumber] = useState('')

    function numberInputHandler(yourText){
        setYourNumber(yourText);
    }
    
    function resetInputHandler(){
        setYourNumber('');
    }
    function confirmInputHandler(){
        const numberToConfirm = parseInt(yourNumber);

        if(isNaN(numberToConfirm)|| numberToConfirm <= 0 || numberToConfirm > 99){
            Alert.alert(
                'Wrong number!',
                'Number has to be a number between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }
        onPickNumber(yourNumber);
    }

    return (
      <View style={styles.container}>
        <View style={styles.mainTextContainer}>
            <Text style={styles.mainText}>
            Enter your number
            </Text>
        </View>
            <TextInput
                style={styles.numbersInput}
                maxLength={2}
                keyboardType='numeric'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={yourNumber}
            />
        
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <RoundedButton onPress={resetInputHandler}>Reset</RoundedButton>
            </View>
            <View style={styles.buttonContainer}>
                <RoundedButton onPress={confirmInputHandler}>Confirm</RoundedButton>
            </View>     
        </View> 
      </View>
    )
  
}

export default StartGameScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
        marginTop: '50%',
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    mainTextContainer:{
        marginVertical: 30,
    },
    mainText:{
        fontSize: 28,
        color: Colors.accent500,
        fontFamily: 'open-sans-bold',
    },
    numbersInput:{
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer:{
        marginVertical: 40,
        flexDirection: 'row'
    },
    buttonContainer:{
        flex: 1,
        marginHorizontal: 10,
    },
  });
  

