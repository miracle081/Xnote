import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Theme } from '../components/Theme'

export function Intro() {
  return (
    <View>
      <Text styles={{ color: Theme.color.primary }}>Intro</Text>
    </View>
  )
}

const styles = StyleSheet.create({})