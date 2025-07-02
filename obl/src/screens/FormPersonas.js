import { View, Text, TextInput, Pressable } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { styles } from "../styles/styles";
import { useFonts } from "expo-font";

//ME TRAIGO POR PROPS LOS ESTADOS Y FUNCION AGREGAR
export const FormPersonas = ({
    nombre, setNombre,
    telefono, setTelefono,
    onAgregar
}) => {

    //FUENTES CARGADAS
    let [fontsLoaded] = useFonts({
        Chicle: require('../font/Chicle/Chicle-Regular.ttf'),

        DynaPuff: require('../font/DynaPuff/static/DynaPuff_Condensed-Bold.ttf'),
        DynaPuff2: require('../font/DynaPuff/static/DynaPuff_Condensed-Medium.ttf'),

        Lilita_One: require('../font/Lilita_One/LilitaOne-Regular.ttf'),
    });

    if (!fontsLoaded) return null
    return (
        <View>
            <FontAwesome6
                style={styles.iconos}
                name="person"
                size={30}
                color="black"
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrese un nombre"
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrese un telefono"
                value={telefono}
                onChangeText={setTelefono}
            />

            <Pressable
                style={styles.btnEstandar}
                onPress={() => onAgregar()}
            >
                <Text
                    style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                    Agregar Persona
                </Text>
            </Pressable>
        </View>
    )
}
