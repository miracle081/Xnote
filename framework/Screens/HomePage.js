import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppTheme } from '../Components/AppTheme'
import { Profile } from './Profile'
import { PostNote } from './PostNote'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-reanimated-carousel';

const carouselLinks = [
    require("../../assets/intro.jpg"),
    require("../../assets/icon.png"),
]

function HomeScreen() {
    const screenWidth = Dimensions.get("screen").width
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>X-Note</Text>
            <Ionicons name="person-circle-sharp" size={24} color="black" />
            <View style={{ marginVertical: 10, }}>
                <Carousel
                    loop
                    width={screenWidth - 20}
                    height={300}
                    autoPlay={true}
                    data={carouselLinks}
                    style={{ borderRadius: 10 }}
                    scrollAnimationDuration={2000}
                    renderItem={({ index }) => (
                        // <Image style={{ width: '100%', height: 200, borderRadius: 10, }} source={{ uri: carouselLinks[index] }} />
                        <>
                            <Image style={{ width: '100%', height: 200, borderRadius: 10, }} source={carouselLinks[index]} />
                            <Text>This is at the index of {index}</Text>
                        </>
                    )}
                />
            </View>
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
                        size = focused ? 45 : 23
                        iconName = focused ? 'home' : 'home-outline';
                    }
                    else if (route.name === 'Profile') {
                        size = focused ? 35 : 23
                        iconName = focused ? 'account' : 'account-outline';
                    }
                    else if (route.name === 'PostNote') {
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