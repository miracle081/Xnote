import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBotton } from '../Components/AppButton'
import { Theme } from '../Components/Theme'

export function IntroScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ImageBackground source={require("../../assets/intro.jpg")} style={styles.bg}>
        <View style={styles.overlay}>
          <View></View>
          <Text style={{ textAlign: "center", color: "white", fontSize: 40, fontWeight: "bold" }}>X-Note</Text>
          <View style={{ gap: 10, marginBottom: 30 }}>
            <AppBotton touchable={9}>Get started</AppBotton>
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
    backgroundColor: Theme.color.primary + 50,
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