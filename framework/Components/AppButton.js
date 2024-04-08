import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AppTheme } from './AppTheme';

export function AppBotton({ textStyle, onPress, children, style, textColor, buttonColor }) {

    const styles = StyleSheet.create({
        btn: {
            // flex: touchable,
            borderRadius: 30,
            backgroundColor: buttonColor || AppTheme.color.primary,
            padding: 13,
        },
    });
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[styles.btn, style]}>
            <Text style={[{ color: textColor || "white", textAlign: "center", fontSize: 17, fontFamily: AppTheme.font.text700 }, textStyle]}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}