import { StyleSheet, Platform } from "react-native";


export const colors = {
    ColorFondo1: '#3868A6',
    ColorFondo2: '#FC4A1A',
    ColorFondo3: "#fff",
    ColorNegro: 'black',
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: colors.ColorFondo1,
        paddingHorizontal: 15,
        marginTop: Platform.OS === 'android' ? 50 : 0
    },
    //TITLE COMPONENTE
    texttitleseccion: {
        marginTop: 5,
        padding: 10,
        textAlign: 'center',
    },
    //INPUT PERSONAS
    input: {
        marginTop: 10,
        marginRight: 50,
        marginLeft: 50,
        height: 40,
        borderColor: colors.ColorFondo1,
        backgroundColor: colors.ColorFondo3,
        borderWidth: 2,
        borderRadius: 10,
        color: colors.ColorNegro,
        fontWeight: 'bold',
    },
    //ICONO DE PERSONA EN PERSONAS
    person: {
        textAlign: 'center',
        color: colors.ColorFondo2,
        margin: 5,

    },
    //PRESEABLE AGREGAR PERSONA
    btnAgregarPersona: {
        marginTop: 10,
        marginRight: 50,
        marginLeft: 50,
        height: 40,
        backgroundColor: colors.ColorFondo2,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    }
})