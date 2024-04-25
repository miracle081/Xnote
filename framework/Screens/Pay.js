import { View, Text, Alert, ToastAndroid } from "react-native";
import { Paystack } from 'react-native-paystack-webview';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { useContext } from "react";
import { AppContext } from "../Components/globalVariables";
import { AppTheme } from "../Components/AppTheme";
import { db } from "../Service/firebase";
// import { PAYSTACK_PUBLIC_KEY } from "../../Firebase/APIkeys.key";
// import { db } from "../../Firebase/settings";

export function Pay({ navigation, route }) {
    const { userUID, setPreloader, userInfo } = useContext(AppContext);
    const { amount } = route.params
    return (
        <View style={{ flex: 1 }}>
            <Paystack
                paystackKey={"pk_test_92fcc0077ec7f42a73ff01c87db79c3698b06dec"}
                amount={amount + ((1.8 / 100) * amount)}
                billingEmail={userInfo.email}
                activityIndicatorColor={AppTheme.color.primary}
                onCancel={() => {
                    navigation.goBack()
                }}
                onSuccess={() => {
                    updateDoc(doc(db, "users", userUID), {
                        balance: amount + Number(userInfo.balance)
                    }).then(() => {
                        Alert.alert(
                            "Payment successful",
                            `Payment of ${amount} was successful`,
                            [{ text: "Ok", onPress: () => navigation.goBack() }]
                        )
                    }).catch(() => {
                        Alert.alert(
                            "Payment Status",
                            `Something went wrong.`,
                            [{ text: "Try Again", onPress: () => navigation.goBack() }]
                        )
                    })
                }}
                autoStart={true}
            />
        </View>
    )
}