import { StyleSheet, Platform } from "react-native";


export const colors = {
    ColorFondo1: '#3868A6',
    ColorFondo2: '#FC4A1A',
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