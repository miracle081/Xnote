import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Theme } from '../components/Theme'

export function Homescreen() {
    return (
        <View>
            <Text>Homescreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Theme.color.primary,
        height: "50%"
    }
})