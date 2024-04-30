import { useContext } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, } from 'react-native';
import { AppTheme } from './AppTheme';
import { AppContext } from './globalVariables';

export function Preloader() {
    const { preloader } = useContext(AppContext);
    return (
        <>
            {
                preloader ?
                    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
                        <ActivityIndicator size="large" color={AppTheme.color.primary} />
                    </View>
                    : null
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f4f4c4',
        zIndex: 2
    },
});

