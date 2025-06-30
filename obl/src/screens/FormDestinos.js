import { View, Text, TextInput, Pressable } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { styles } from "../styles/styles";
import { useFonts } from "expo-font";

export const FormDestino = ({
    nombre, setNombre,
    lat, setLat,
    long, setLong,
    onAgregar
}) => {

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
                style={styles.iconos}
                name="map-location-dot"
                size={24} color="black" />

            <TextInput
                style={styles.input}
                placeholder="Ingrese un nombre"
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrese una latitud"
                value={lat}
                onChangeText={setLat}
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrese una longitud"
                value={long}
                onChangeText={setLong}
            />

            <Pressable
                style={styles.btnAgregar}
                onPress={() => onAgregar()}
            >
                <Text
                    style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                    Agregar Destino
                </Text>
            </Pressable>
        </View>

    )
}