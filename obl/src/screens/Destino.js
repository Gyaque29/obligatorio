import { View, Text, TextInput, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../styles/styles";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const Destino = () => {

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
            <Text
                style={[{ fontFamily: "Lilita_One" },
                styles.texttitleseccion]}>
                Ingresa tus destinos !
            </Text>

            <FontAwesome6
                style={styles.person}
                name="map-location-dot"
                size={24} color="black" />

            <TextInput
                style={styles.input}
                placeholder="Ingrese un nombre"
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrese una latitud"
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrese una longitud"
            />

            <Pressable
                style={styles.btnAgregar}
            >
                <Text
                    style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                    Agregar Destino
                </Text>
            </Pressable>
        </View>
    )
}
