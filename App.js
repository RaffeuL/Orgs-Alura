import React, { useCallback, useEffect } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen';

import Basket from './src/screens/Basket';
import mock from './src/mocks/basket';

export default function App() {
  const [fontsLoaded] = useFonts({
    "MontSerratRegular": Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <SafeAreaView onLayout={ onLayoutRootView }>
      <StatusBar />
      <Basket {...mock}/>
    </SafeAreaView>
  );
}