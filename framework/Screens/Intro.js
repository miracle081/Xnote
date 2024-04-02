import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Theme } from '../components/Theme'
import { AppBotton } from '../Components/AppButton'

export function Intro() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ImageBackground source={require("../../assets/intro.jpg")} style={styles.bg}>
        <View style={styles.overlay}>
          <Text styles={{ color: Theme.color.primary }}>Intro</Text>
          <AppBotton touchable={9}>Get started</AppBotton>
          <AppBotton>Login</AppBotton>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    height: "100%",
    width: "100%"
  }
})