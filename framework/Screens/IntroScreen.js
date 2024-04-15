import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBotton } from '../Components/AppButton'
import { AppTheme } from '../Components/AppTheme'

export function IntroScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ImageBackground source={require("../../assets/intro.jpg")} style={styles.bg}>
        <View style={styles.overlay}>
          <View></View>
          <Text style={{ textAlign: "center", color: "white", fontSize: 40, fontWeight: "bold" }}>X-Note</Text>
          <View style={{ gap: 10, marginBottom: 30 }}>
            <AppBotton onPress={() => navigation.navigate("SignUp")} touchable={9}>Get started</AppBotton>
            <AppBotton style={styles.btn}>Login</AppBotton>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    height: "100%",
    width: "100%"
  },
  overlay: {
    paddingTop: 50,
    backgroundColor: AppTheme.color.primary + 50,
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  btn: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1
  }
})