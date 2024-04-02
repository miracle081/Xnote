import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SignUp } from './framework/Screens/SignUp';
import { Intro } from './framework/screens/Intro';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Intro />
    </View>
  );
}

