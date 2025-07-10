import { View, Text, Modal, Pressable, ScrollView } from "react-native"
import { useFonts } from "expo-font"
import { styles } from "../styles/styles";
import { getViajes, getIntegrantesDeViaje, getDestinosDeViaje, getCostosDeViaje, getCostosTotalDeViaje } from '../database/database';
import { useFocusEffect } from '@react-navigation/native';
import { useState, useCallback } from "react";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';


export const Home = () => {

    //ESTADO PARA MANEJAR MODAL DE VIAJES Y VIAJE SELECCIONADO
    const [modal, setModal] = useState('')
    const [idviaje, setIdviaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [fechaInicio, setFechaInicio] = useState('')
    const [fechafin, setFechaFin] = useState('')

    //ESTADO PARA MANEJAR LOS VIAJES
    const [viajes, setViajes] = useState([])

    //ESTADO PARA MANEJAR LOS INTEGRANTES DE VIAJE SELECCIONADO
    const [integrantes, setIntegrantes] = useState([])

    //ESTADO PARA MANEJAR LOS  DESTINOS DE VIAJE SELECCIONADO
    const [destinos, setDestinos] = useState([])

    //ESTADO PARA MANEJAR LOS COSTOS DEL VIAJE SELECCIONADO
    const [costos, setCostos] = useState([])

    //ESTADO PARA MANEJAR COSTO TOTAL VIAJE SELECCIONADO
    const [costoTOTAL, setCostoTOTAL] = useState([])


    //METODO PARA CARGAR VIAJES AL RENDER
    const CargarViajes = () => {
        getViajes().then((data) => {
            setViajes(data);
        });
    }

    const CargarIntegrantes = (id) => {
        getIntegrantesDeViaje(id).then((data) => {
            setIntegrantes(data)
            console.log('INTEGRANTES CARGADOS: ', data)
        })

        getDestinosDeViaje(id).then((data) => {
            setDestinos(data)
            console.log('DESTINOS CARGADOS: ', data)
        })

        getCostosDeViaje(id).then((data) => {
            setCostos(data)
            console.log('COSTOS CARGADOS', data)
        })

        getCostosTotalDeViaje(id).then((data) => {
            setCostoTOTAL(data)
            console.log('COSTO TOTAL', data)
        })
    }

    // METODO PARA VER INFO DE VIAJE SELECCIONADO
    const VerViajeSeleciconado = (viaje) => {
        setIdviaje(viaje.id)
        setNombre(viaje.nombre)
        setFechaInicio(viaje.f_inicio)
        setFechaFin(viaje.f_fin)
        CargarIntegrantes(viaje.id)
        setModal(true)
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
            <ScrollView>
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
                        key={viaje.id}
                    >
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
                        <Pressable
                            style={styles.btnEstandar}
                        >
                            <Text
                                style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'black' }}
                                onPress={() => VerViajeSeleciconado(viaje)}
                            >
                                Ver Info
                            </Text>
                        </Pressable>
                    </View>
                ))}


                {/*MODAL PARA MOSTRAR VIAJE COMPLETO */}
                <Modal
                    visible={modal}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => setModal(false)}
                >
                    <ScrollView>
                        <View
                            style={styles.ModalEditar}
                        >
                            <View
                                style={styles.containerEdicion}
                            >
                                <Text style={{
                                    fontFamily: "Lilita_One",
                                    fontSize: 35,
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    marginTop: 25,
                                    color: 'white',
                                }}>
                                    INFO DEL VIAJE
                                </Text>

                                <Fontisto
                                    name="zoom"
                                    size={30}
                                    color="black"
                                    style={styles.iconos}
                                />

                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        marginTop: 25,
                                        color: 'white',
                                        fontSize: 20,
                                    }}
                                >
                                    NOMBRE: {nombre}
                                </Text>

                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        marginTop: 25,
                                        color: 'white',
                                        fontSize: 20,
                                    }}
                                >
                                    FECHA INICIO: {fechaInicio}
                                </Text>

                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        marginTop: 10,
                                        color: 'white',
                                        fontSize: 20,
                                    }}
                                >
                                    FECHA FIN: {fechafin}
                                </Text>

                                <Text style={{
                                    fontFamily: "Lilita_One",
                                    fontSize: 20,
                                    marginTop:15,
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}>
                                    INTEGRANTES
                                </Text>
                                {integrantes.map((i) => (
                                    <View
                                        style={styles.containerlist}
                                    >


                                        <Text
                                            style={{
                                                fontFamily: "Lilita_One",
                                                fontSize: 20,
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                                color: 'white',
                                            }}
                                        >
                                            - {i}
                                        </Text>
                                    </View>
                                ))}

                                <Text style={{
                                    fontFamily: "Lilita_One",
                                    fontSize: 20,
                                    marginTop:15,
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}>
                                    DESTINOS
                                </Text>

                                {destinos.map((d) => (
                                    <View
                                        style={styles.containerlist}
                                    >
                                        <Text
                                            style={{
                                                fontFamily: "Lilita_One",
                                                fontSize: 20,
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                                color: 'white',
                                            }}
                                        >
                                            - {d}
                                        </Text>
                                    </View>
                                ))}

                                <Text style={{
                                    fontFamily: "Lilita_One",
                                    fontSize: 20,
                                    marginTop:15,
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}>
                                    COSTOS
                                </Text>

                                {costos.map((c) => (
                                    <View
                                        style={styles.containerlist}
                                    >
                                        <Text
                                            style={{
                                                fontFamily: "Lilita_One",
                                                fontSize: 18,
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                                color: 'white',
                                            }}
                                        >
                                            COSTO: {c.tipo}
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily: "Lilita_One",
                                                fontSize: 18,
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                                color: 'white',
                                            }}
                                        >
                                            MONTO: ${c.monto}
                                        </Text>
                                    </View>
                                ))}

                               <Text style={{
                                    fontFamily: "Lilita_One",
                                    fontSize: 20,
                                    marginTop:15,
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}>
                                    COSTO TOTAL DEL VIAJE: $ {costoTOTAL}
                                </Text> 

                                <Pressable
                                    style={styles.btnEstandar}
                                    onPress={() => setModal(false)}
                                >
                                    <Text
                                        style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'black' }}>
                                        Cerrar
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </ScrollView>
                </Modal>
            </ScrollView>
        </View>
    )
}
