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
        fontSize: 20,
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
    iconos: {
        textAlign: 'center',
        color: colors.ColorFondo2,
        margin: 5,
    },
    location: {
        textAlign: 'center',
        color: colors.ColorFondo2,
        margin: 5,
    },
    //PRESEABLE AGREGAR PERSONA
    btnAgregar: {
        marginTop: 10,
        marginRight: 50,
        marginLeft: 50,
        height: 40,
        backgroundColor: colors.ColorFondo2,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    //BTN FECHAS
    btnFechas: {
        marginTop: 5,
        marginRight: 25,
        marginLeft: 25,
        height: 40,
        backgroundColor: colors.ColorFondo2,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    //CONTENEDOR FORM VIAJES
    containerformViajes: {
        textAlign: 'center',
        margin: 20,
        borderRadius: 50,
        borderColor: colors.ColorFondo1,
        borderWidth: 2,
        padding: 5,
    },
    //CONTENEDOR COSTOS
    containercosto: {
        textAlign: 'center',
        margin: 20,
        borderRadius: 50,
        borderColor: colors.ColorFondo1,
        borderWidth: 2,
        padding: 5,
    },
    //CONTENEDOR LISTA DE PERSONAS
    containerlist: {
        textAlign: 'center',
        marginTop: 15,
        marginRight: 50,
        marginLeft: 50,
        marginBottom: 15,
        borderRadius: 10,
        borderColor: colors.ColorFondo1,
        borderWidth: 2,
        padding: 5,
    },
    //MODAL EDITAR PERSONAS
    ModalEditarPersonas: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(67, 62, 62, 0.7)',
        borderRadius: 10,
        borderColor: colors.ColorFondo1,
        borderWidth: 2,
    },
    containerEdicionP:{
        textAlign: 'center',
        margin: 20,
        padding: 5,
    }
})