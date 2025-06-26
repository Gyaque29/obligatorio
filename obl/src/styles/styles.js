import { StyleSheet, Platform } from "react-native";


export const colors = {
    ColorFondo1: '#3868A6',
    ColorFondo2: '#FFCB05',
    ColorTxt: '#3868A6',
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: colors.ColorFondo1,
        paddingHorizontal: 15,
        marginTop: Platform.OS === 'android' ? 50 : 0
    },
})