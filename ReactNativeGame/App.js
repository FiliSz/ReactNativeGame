import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import Colors from './constans/colors';

import StartGameScreen from './components/StartGameScreen';
import GameScreen from './components/GameScreen';
import GameIsOver from './components/GameIsOver';
import { useFonts } from 'expo-font';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync().then(() => {
      if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
    });
  }, [fontsLoaded]);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }

  if (gameIsOver && userNumber) {
    screen = <GameIsOver numberOfRounds={guessRounds} newGameHandler={startNewGameHandler} />;
  }

  return (
    <LinearGradient colors={[Colors.primary500, Colors.accent500]} style={styles.container}>
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundOpacity}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        <StatusBar style="light" />
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
  },
});
