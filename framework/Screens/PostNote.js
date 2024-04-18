import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native"
import { AppBotton } from "../Components/AppButton"
import { AppTheme } from "../Components/AppTheme"
import { addDoc, collection, doc } from "firebase/firestore"
import { db } from "../Service/firebase"
import { AppContext } from "../Components/globalVariables"
import { useContext, useState } from "react"


export function PostNote({ navigation }) {
    const { userUID, } = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    function addNote() {
        addDoc(collection(db, "notes"), {
            title,
            body,
            userUID,
            dateCreated: new Date().getTime(),
            shareNote: [],
        })
            .then(() => {
                navigation.navigate("HomePage", { screen: "HomeScreen" })
                console.log("Done");
            }).catch(e => console.log(e))
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{ marginBottom: 20, fontSize: 20, fontWeight: "bold", color: AppTheme.color.purple500 }}>Create Note</Text>
                <Text>Title</Text>
                <TextInput
                    onChangeText={(inp) => setTitle(inp)}
                    style={styles.input}
                />
                <Text>Content</Text>
                <TextInput
                    multiLine
                    onChangeText={(inp) => setBody(inp)}
                    style={styles.input2}
                />
                <AppBotton onPress={addNote} style={styles.btn}>Create</AppBotton>
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
    input2: {
        borderWidth: 1,
        borderColor: '#86469C',
        padding: 10,
        borderRadius: 10,
        marginBottom: 25,
        height: 500,
    },
    btn: {
        backgroundColor: AppTheme.color.purple500,
        width: 120,
        // marginLeft:85,
        marginHorizontal: 85,
    }
})