import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../styles/styles";
import { Costos } from "./Costos";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const Viajes = () => {
    
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
            <ScrollView>
                <Text
                    style={[{ fontFamily: "Lilita_One" }, 
                    styles.texttitleseccion]}>
                    Agrega un nuevo viaje !
                </Text>

                <FontAwesome6
                    style={styles.iconos}
                    name="plane-departure"
                    size={24} color="black"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Ingrese un nombre"
                />

                <View>
                    <Pressable
                        style={styles.btnAgregar}
                    >
                        <Text
                            style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                            Fecha Inicio
                        </Text>
                    </Pressable>

                    <Pressable
                        style={styles.btnAgregar}
                    >
                        <Text
                            style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                            Fecha Fin
                        </Text>
                    </Pressable>
                </View>

                <Costos />

                <Pressable
                    style={styles.btnAgregar}
                >
                    <Text
                        style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                        Agregar Viaje
                    </Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}
