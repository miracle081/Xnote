import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SignUp } from './framework/Screens/SignUp';
import { LogIn } from './framework/Screens/LogIn';
import { IntroScreen } from './framework/Screens/IntroScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <IntroScreen />
    </View>
  );
}

