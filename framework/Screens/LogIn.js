import { useState } from "react";
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";
import { AppBotton } from "../Components/AppButton";
// import { Button } from "react-native-paper"

export function LogIn({ navigation }) {
    const [email, setEmail] = useState('mich@gmail.com')
    const [userId, setUserId] = useState('7890987')
    const [password, setPassword] = useState('5643Mich')

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{ marginBottom: 20, fontSize: 20, fontWeight: "bold", color: "#86469C" }}>Login To Your Xnote Account</Text>
                <Text>User ID</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(inp) => setUserId(inp)}
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
                <AppBotton onPress={() => navigation.navigate("HomePage")} style={styles.btn}>Login</AppBotton>
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