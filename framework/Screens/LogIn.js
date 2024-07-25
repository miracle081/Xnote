import { useState, useContext } from "react";
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { AppBotton } from "../Components/AppButton";
import { authentication } from "../Service/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../Components/globalVariables";
// import { Button } from "react-native-paper"

export function LogIn({ navigation }) {
    const { setUserUID, setPreloader } = useContext(AppContext)
    const [email, setEmail] = useState('john@gmail.com')
    const [password, setPassword] = useState('password')
    const change = () => setEmail(!email)
    function loginAccount() {
        setPreloader(true)
        signInWithEmailAndPassword(authentication, email, password)
            .then(() => {
                onAuthStateChanged(authentication, (user) => {
                    setUserUID(user.uid);
                    setPreloader(false)
                    navigation.navigate("HomePage")
                })
            })
            .catch(e => {
                setPreloader(false)
                console.log(e)
            })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{ marginBottom: 20, fontSize: 20, fontWeight: "bold", color: "#86469C" }}>Login To Your Xnote Account</Text>
                <Text>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(inp) => setEmail(inp)}
                    value="john@gmail.com"
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(inp) => setPassword(inp)}
                    value="password"
                />
                <AppBotton onPress={loginAccount} style={styles.btn}>Login</AppBotton>
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