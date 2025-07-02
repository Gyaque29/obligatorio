import { View, Text, Pressable, ScrollView } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useFonts } from "expo-font";
import { styles } from "../styles/styles";
import { useState } from "react";
import { FormViaje } from "./FormViaje";

import { SeleccionarIntegrantes } from "./SeleccionIntegrantes";

export const Viajes = () => {


    //ESTADO PARA MANEJAR NOMBRE VIAJE
    const [nombre, setNombre] = useState('');

    //ESTADOS PARA MENJAR LAS FECHAS DE INICIO Y FIN
    const [fechaInicio, setFechaInicio] = useState(null);
    const [fechaFin, setFechaFin] = useState(null);

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
                    styles.txttitle]}>
                    Crea un nuevo viaje !
                </Text>

                <FontAwesome6
                    style={styles.iconos}
                    name="plane-departure"
                    size={30}
                    color="black"
                />

                <FormViaje
                    nombre={nombre}
                    setNombre={setNombre}
                    fechaInicio={fechaInicio}
                    setFechaInicio={setFechaInicio}
                    fechaFin={fechaFin}
                    setFechaFin={setFechaFin}
                />

                <SeleccionarIntegrantes />

                <Pressable
                    style={styles.btnEstandar}
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
