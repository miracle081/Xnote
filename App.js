import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SignUp } from './framework/Screens/SignUp';
import { LogIn } from './framework/Screens/LogIn';
import { IntroScreen } from './framework/Screens/IntroScreen';
import { StackNavigation } from './framework/Components/StackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico"
import { Raleway_100Thin, Raleway_600SemiBold, Raleway_900Black, Raleway_800ExtraBold, Raleway_700Bold, Raleway_500Medium, Raleway_200ExtraLight, Raleway_300Light, Raleway_400Regular } from '@expo-google-fonts/raleway';
import { AppProvider } from './framework/Components/globalVariables';


export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({ Pacifico_400Regular });
        await Font.loadAsync({ Raleway_100Thin });
        await Font.loadAsync({ Raleway_200ExtraLight });
        await Font.loadAsync({ Raleway_300Light });
        await Font.loadAsync({ Raleway_400Regular });
        await Font.loadAsync({ Raleway_500Medium });
        await Font.loadAsync({ Raleway_600SemiBold });
        await Font.loadAsync({ Raleway_700Bold, });
        await Font.loadAsync({ Raleway_800ExtraBold, });
        await Font.loadAsync({ Raleway_900Black, });
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <AppProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </AppProvider>
  );
}

