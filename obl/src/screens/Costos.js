import { View, Text, TextInput, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../styles/styles";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const Costos = () => {

    //FUENTES CARGADAS
    let [fontsLoaded] = useFonts({
        Chicle: require('../font/Chicle/Chicle-Regular.ttf'),

        DynaPuff: require('../font/DynaPuff/static/DynaPuff_Condensed-Bold.ttf'),
        DynaPuff2: require('../font/DynaPuff/static/DynaPuff_Condensed-Medium.ttf'),

        Lilita_One: require('../font/Lilita_One/LilitaOne-Regular.ttf'),
    });

    if (!fontsLoaded) return null
    return (
        <View style={styles.containercosto}>
            <Text
                style={[{ fontFamily: "Lilita_One" },
                styles.texttitleseccion]}>
                Agrega tus costos !
            </Text>

            <FontAwesome6
                name="money-bill-1"
                size={24} color="black"
                style={styles.iconos}
            />


            <TextInput
                style={styles.input}
                placeholder="Ingrese una descripcion"
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrese un monto"
            />

            <Pressable
                style={styles.btnAgregar}
            >
                <Text
                    style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                    Agregar Costo
                </Text>
            </Pressable>
        </View>
    )
}
