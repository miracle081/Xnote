import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native"
import { AppBotton } from "../Components/AppButton"
import { AppTheme } from "../Components/AppTheme"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import { db } from "../Service/firebase"
import { AppContext } from "../Components/globalVariables"
import { useContext, useEffect, useState } from "react"
import { generateRequestId } from "../Components/requestId"


export function PostNote({ navigation }) {
    const { userUID, setPreloader } = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [noteID, setNoteID] = useState('')

    useEffect(() => {
        setNoteID(generateRequestId())
    }, [])



    function addNote() {
        setPreloader(true)
        addDoc(doc(db, "notes"), {
            title,
            body,
            userUID,
            noteID,
            dateCreated: new Date().getTime(),
            shareNote: [],
        })
            .then(() => {
                setPreloader(false)
                navigation.navigate("HomePage", { screen: "HomeScreen" })
                console.log("Done");
            }).catch(e => {
                setPreloader(false)
                console.log(e)
            })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{ marginBottom: 20, fontSize: 20, fontWeight: "bold", color: AppTheme.color.purple500 }}>Create Note</Text>
                <TextInput
                    onChangeText={(inp) => setTitle(inp)}
                    style={styles.input}
                    placeholder="Title"
                />
                <TextInput
                    placeholder="Enter note details"
                    multiline
                    numberOfLines={30}
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
        padding: 20,
    },
    input: {
        padding: 10,
        borderRadius: 10,
        fontSize: 25,
        fontFamily: AppTheme.font.text700
    },
    input2: {
        fontSize: 18,
        padding: 10,
        borderRadius: 10,
        marginBottom: 25,
        flex: 1,
        fontFamily: AppTheme.font.text400,
    },
    btn: {
        backgroundColor: AppTheme.color.primary,

    }
})