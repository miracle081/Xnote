import { Alert, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { AppTheme } from "../Components/AppTheme";
import { AppBotton } from "../Components/AppButton";
import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Service/firebase";


export function Profile() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')

    function updateProfile() {
        updateDoc(doc(db, "users", "7GNU3V0BUlSsmHOAPgNReRlMyFj1"), {
            phone,
            lastName,
            firstName,
        })
            .then(() => {
                Alert.alert("Update details", "Your detials has been updated successfully")
            })
            .catch(e => {
                console.log(e);
            })
    }

    return (
        <SafeAreaView style={[styles.container,]}>
            <View style={{ padding: 20, flex: 1 }}>
                <Image source={require("../../assets/icon.png")} style={styles.st} />
                <View>
                    <Text>First name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(inp) => setFirstName(inp)}
                    />

                    <Text>Last name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(inp) => setLastName(inp)}
                    />
                    <Text>Phone Number</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(inp) => setPhone(inp)}
                    />

                    <Text>Email</Text>
                    <TextInput
                        style={styles.input}
                        value="john@gmail.com"
                        editable={false}
                    />
                </View>
                <View style={styles.btn1}>
                    <AppBotton onPress={updateProfile} style={styles.btn}>Edit Profile</AppBotton>
                    <AppBotton style={styles.btn}>Reset Password</AppBotton>
                </View>
                <AppBotton style={{ backgroundColor: 'red', width: 200, marginHorizontal: 100, marginBottom: 20, }}>Delete Account</AppBotton>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        padding: 30,
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null,
    },
    st: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 60,
        marginBottom: 20,
        marginHorizontal: 115,
    },
    input: {
        borderWidth: 1,
        borderColor: '#86469C',
        padding: 10,
        borderRadius: 10,
        marginBottom: 25
    },
    btn1: {
        // backgroundColor:Theme.color.purple500,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginBottom: 10
    }
})