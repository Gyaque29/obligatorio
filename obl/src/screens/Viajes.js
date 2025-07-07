import { View, Text, Pressable, ScrollView } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useFonts } from "expo-font";
import { styles } from "../styles/styles";
import { useState } from "react";
import { FormViaje } from "./FormViaje";
import { useSelector, useDispatch } from "react-redux";
import { resetArreglo } from "../redux/viajesSlice";
import { SeleccionIntegrantes } from "./SeleccionIntegrantes";
import { SeleccionDestinos } from "./SeleccionDestinos";
import { Costos } from "./Costos";
import { crearViajeCompleto } from "../database/database";

export const Viajes = () => {

    const dispatch = useDispatch();

    //ESTADO PARA MANEJAR NOMBRE VIAJE
    const [nombre, setNombre] = useState('');

    //ESTADOS PARA MENJAR LAS FECHAS DE INICIO Y FIN
    const [fechaInicio, setFechaInicio] = useState(null);
    const [fechaFin, setFechaFin] = useState(null);

    const integrantes = useSelector(state => state.viajes.integrantes)
    const destinos = useSelector(state => state.viajes.destinos)
    const costos = useSelector(state => state.viajes.costos)

    const crearViaje = (nombre, fechaInicio, fechaFin) => {
        if (!nombre) {
            console.log('VIAJES - Campo nombre vacio')
            return
        } else if (!fechaInicio) {
            console.log('VIAJES - Campo fecha inicio vacio')
            return
        } else if (!fechaFin) {
            console.log('VIAJES - Campo fecha fin vacio')
            return
        } else if (fechaFin < fechaInicio) {
            console.log('VIAJES - La fecha inicio debe menor a la fecha fin')
            return
        } else if (!integrantes.length) {
            console.log('VIAJES - Agrega integrantes al viaje')
            return
        } else if (!destinos.length) {
            console.log('VIAJES - Agrega destinos al viaje')
            return
        } else if (!costos.length) {
            console.log('VIAJES -Agrega costos al viaje')
        }

        crearViajeCompleto(nombre, fechaInicio, fechaFin, integrantes, destinos, costos)
        setNombre('')
        setFechaInicio('')
        setFechaFin('')
        dispatch(resetArreglo(integrantes, destinos, costos))
    }


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

                <SeleccionIntegrantes />


                <SeleccionDestinos />

                <Costos />


                <Pressable
                    style={styles.btnEstandar}
                    onPress={() => crearViaje(nombre, fechaInicio, fechaFin)}
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
