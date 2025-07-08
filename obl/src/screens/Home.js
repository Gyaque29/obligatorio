import { View, Text } from "react-native"
import { useFonts } from "expo-font"
import { styles } from "../styles/styles";
import { getViajes } from '../database/database';
import { useFocusEffect } from '@react-navigation/native';
import { useState, useCallback } from "react";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export const Home = () => {

    //ESTADO PARA MANEJAR LOS VIAJES
    const [viajes, setViajes] = useState([])

    //METODO PARA CARGAR VIAJES AL RENDER
    const CargarViajes = () => {
        getViajes().then((data) => {
            setViajes(data);
        });
    }

    //USE EFECT PARA CARGAR METODO DE CARGAR VIAJES
    useFocusEffect(
        useCallback(() => {
            CargarViajes();
        }, [])
    );

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
                styles.txttitle]}>
                Bienvenidos !
            </Text>

            <FontAwesome5
                name="handshake"
                size={30}
                color="black"
                style={styles.iconos}
            />

            {viajes.map((viaje) => (
                <View style={styles.containerlist}
                    key={viaje.id}    >
                    <Text
                        style={{
                            fontFamily: "Lilita_One",
                            fontSize: 16,
                            textAlign: 'center',
                        }}
                    >
                        {viaje.nombre}
                    </Text>

                    <Text
                        style={{ fontSize: 16, textAlign: 'center' }}
                    >
                        {viaje.f_inicio}
                    </Text>


                    <Text
                        style={{ fontSize: 16, textAlign: 'center' }}
                    >
                        {viaje.f_fin}
                    </Text>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    </View>
                </View>
            ))}
        </View>
    )
}
