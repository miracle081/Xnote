import { Alert, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native"
import { AppBotton } from "../Components/AppButton"
import { AppTheme } from "../Components/AppTheme"
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../Service/firebase"
import { AppContext } from "../Components/globalVariables"
import { useContext, useState, useEffect } from "react"


export function ViewNote({ navigation, route }) {
    const { noteID } = route.params
    const { userUID, } = useContext(AppContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    function deleteNote() {
        deleteDoc(doc(db, "notes", noteID))
            .then(() => {
                Alert.alert("Delet", "Note deleted successfully")
                navigation.goBack();
            })
            .catch(e => console.log(e))
    }


    function updateNote() {
        updateDoc(doc(db, "notes", noteID), {
            title,
            body,
            updatedAt: new Date().getTime(),
        })
            .then(() => {
                Alert.alert("Update", "Note updated successfully")
            }).catch(e => console.log(e))
    }

    function getData() {
        getDoc(doc(db, "notes", noteID))
            .then((rData) => {
                const rdata = rData.data();
                setTitle(rdata.title)
                setBody(rdata.body)
            })
            .catch(e => console.log(e))

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={{ marginBottom: 20, fontSize: 20, fontWeight: "bold", color: AppTheme.color.purple500 }}>Create Note</Text>
                <TextInput
                    onChangeText={(inp) => setTitle(inp)}
                    style={styles.input}
                    placeholder="Title"
                    value={title}
                />
                <TextInput
                    placeholder="Enter note details"
                    multiline
                    numberOfLines={30}
                    onChangeText={(inp) => setBody(inp)}
                    style={styles.input2}
                    value={body}
                />
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <AppBotton onPress={updateNote} style={styles.btn}>Create</AppBotton>
                    <AppBotton onPress={deleteNote} style={styles.btn}>Delete Note</AppBotton>
                </View>
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
        flex: 1
    },
    btn: {
        backgroundColor: AppTheme.color.purple500,
        // width: 120,
        // marginLeft:85,
        // marginHorizontal: 85,
        flex: 1
    }
})