import { useState } from "react";
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { AppBotton } from "../Components/AppButton";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { authentication, db } from "../Service/firebase";
import { doc, setDoc } from "firebase/firestore";
// import { Button } from "react-native-paper"

export function SignUp({ navigation }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    function createAccount() {
        createUserWithEmailAndPassword(authentication, email, password)
            .then(() => {
                onAuthStateChanged(authentication, (user) => {
                    setDoc(doc(db, "users", user.uid), {
                        firstName,
                        lastName,
                        email,
                        userUID: user.uid
                    })
                        .then(() => {
                            navigation.navigate("HomePage")
                        })
                        .catch(e => console.log(e))
                })
            })
            .catch(e => console.log(e))
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{ marginBottom: 20, fontSize: 20, fontWeight: "bold", color: "#86469C" }}>Login To Your Xnote Account</Text>

                <Text>First name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(inp) => setFirstName(inp)}
                />

                <Text>Last nate</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(inp) => setLastName(inp)}
                />

                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(inp) => setEmail(inp)}
                />

                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(inp) => setPassword(inp)}
                />
                <AppBotton onPress={createAccount} style={styles.btn}>Create Account</AppBotton>
                <Text style={{ marginTop: 20, alignSelf: "center", color: '#86469C' }}>Forgotten Password?</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null,
        padding: 50,
    },
    input: {
        borderWidth: 1,
        borderColor: '#86469C',
        padding: 10,
        borderRadius: 10,
        marginBottom: 25
    },
})