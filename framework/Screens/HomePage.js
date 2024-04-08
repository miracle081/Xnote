import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppTheme } from '../Components/AppTheme'
import { Profile } from './Profile'
import { PostNote } from './PostNote'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>X-Note</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: 15,
    },
    header: {
        // fontFamily: AppTheme.font.text600,
        fontSize: 25,
    }
})

const Tab = createBottomTabNavigator();

export function HomePage() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    let size;
                    if (route.name === 'HomeScreen') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    else if (route.name === 'Profile') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'account' : 'account-outline';
                    }
                    else if (route.name === 'PostJob') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'plus' : 'plus-box-outline';
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },

                tabBarActiveTintColor: AppTheme.color.primary,
                tabBarInactiveTintColor: "gray",
                headerShown: false,
            })}
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="PostNote" component={PostNote} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}