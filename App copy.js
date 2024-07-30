import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { AppStyles } from './AppStyle'

export default function App() {
  //prop
  return (
    <View style={{ backgroundColor: "green", marginTop: 60, padding: 20, color: "white" }}>

      <Text style={styles.text}>Welcome to React Native</Text>
      <Image source={require("./assets/intro.jpg")} style={{ width: "50%", height: 500, marginTop: 20, borderRadius: 20, alignSelf: "center" }} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
    backgroundColor: "#0000004a"
  }
})