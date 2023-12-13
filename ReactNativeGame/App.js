import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import StartGameScreen from './components/StartGameScreen';
import GameScreen from './components/GameScreen';
import Colors from './constans/colors';
import GameIsOver from './components/GameIsOver';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontsLoading] = useFonts({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')

  });

  if(!fontsLoading){
    return <AppLoading/>
  }

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if(gameIsOver && userNumber){
    screen = <GameIsOver/>
  }

  return (
    <LinearGradient 
     colors={[ Colors.primary500, Colors.accent500]}
     style={styles.container}>
      <ImageBackground
       source={require('./assets/background.png')}
       resizeMode="cover"
       style={styles.container}
       imageStyle={styles.backgroundOpacity}>
        
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      
      </ImageBackground>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundOpacity: {
    opacity: 0.15,
  }
});
