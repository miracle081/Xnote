import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AppTheme } from '../Components/AppTheme'
import { Profile } from './Profile'
import { PostNote } from './PostNote'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Carousel from 'react-native-reanimated-carousel';
import { AppContext } from '../Components/globalVariables'
import { collection, doc, getDoc, limit, onSnapshot, orderBy, query, where } from 'firebase/firestore'
import { db } from '../Service/firebase'

const carouselLinks = [
    require("../../assets/intro.jpg"),
    require("../../assets/icon.png"),
]

function HomeScreen({ navigation }) {
    const { userUID, userInfo, setUserInfo } = useContext(AppContext)
    const screenWidth = Dimensions.get("screen").width;
    const [allNote, setAllNote] = useState([])

    function GetallNote() {
        const q = query(collection(db, "notes"), where("userUID", "==", userUID), orderBy("dateCreated", "desc"), limit(4));
        onSnapshot(q, (snapShot) => {
            const rNote = [];
            snapShot.forEach(item => {
                rNote.push({ ...item.data(), docId: item.id });
            })
            // console.log(rNote);
            setAllNote(rNote)
        })
    }

    useEffect(() => {
        GetallNote();
        getDoc(doc(db, "users", userUID))
            .then(e => {
                const data = e.data();
                setUserInfo(data)
            })
            .catch(e => console.log(e))
    }, [])


    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                    <Ionicons name="person-circle-sharp" size={30} color="black" />
                    <Text style={{ fontSize: 17 }}>{userInfo.firstName} {userInfo.lastName}</Text>
                </View>
                <Text style={styles.header}>X-Note</Text>
            </View>
            <View style={{ marginVertical: 10, }}>
                <Carousel
                    loop
                    width={screenWidth - 20}
                    height={200}
                    autoPlay={true}
                    data={carouselLinks}
                    style={{ borderRadius: 10 }}
                    scrollAnimationDuration={2000}
                    renderItem={({ index }) => (
                        <Image style={{ width: '100%', height: 200, borderRadius: 10, }} source={carouselLinks[index]} />
                    )}
                />
            </View>
            <View>
                <FlatList
                    data={allNote}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => { navigation.navigate("ViewNote", { noteID: item.docId }) }}

                                style={styles.eachNote}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text numberOfLines={3} style={styles.body}>{item.body}</Text>
                                <Text style={[styles.body, { textAlign: "right", fontFamily: null }]}><Text style={{ fontFamily: AppTheme.font.text700 }}>Updated:</Text> 3/3/2024, 4:30 pm</Text>
                            </TouchableOpacity>
                        )
                    }}
                    key={({ item }) => { item.dateCreated }}
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
    },
    eachNote: {
        backgroundColor: AppTheme.color.primary + 20,
        borderRadius: 10,
        padding: 10,
        marginTop: 5
    },
    title: {
        fontSize: 20,
        fontFamily: AppTheme.font.text700,
        marginBottom: 5,
        textTransform: "capitalize"
    },
    body: {
        fontSize: 16,
        fontFamily: AppTheme.font.text500,
        marginBottom: 5,
        color: AppTheme.color.gray
    },
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