import { View, Text, Modal, Pressable, ScrollView } from "react-native"
import { useFonts } from "expo-font"
import { styles } from "../styles/styles";
import { getViajes, getIntegrantesDeViaje, getIntegrantes } from '../database/database';
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

    //METODO PARA CARGAR VIAJES AL RENDER
    const CargarViajes = () => {
        getViajes().then((data) => {
            setViajes(data);
        });
    }

    const CargarIntegrantes = (id) => {
        getIntegrantesDeViaje(id).then((data) => {
            setIntegrantes(data)
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
                                Informacion del viaje Seleccionado
                            </Text>

                            <Fontisto
                                name="zoom"
                                size={24}
                                color="black"
                                style={styles.iconos}
                            />

                            <Text
                                style={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    marginTop: 25,
                                    color: 'white',
                                    fontSize: 25,
                                }}
                            >
                                {nombre}
                            </Text>

                            <Text
                                style={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    marginTop: 25,
                                    color: 'white',
                                    fontSize: 18,
                                }}
                            >
                                FECHA INICIO : {fechaInicio}
                            </Text>

                            <Text
                                style={{
                                    fontSize: 16,
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    marginTop: 10,
                                    color: 'white',
                                    fontSize: 18,
                                }}
                            >
                                FECHA FIN : {fechafin}
                            </Text>

                            {integrantes.map((i) => (
                                <View
                                    style={styles.containerlist}
                                >
                                    <Text
                                        style={{
                                            fontFamily: "Lilita_One",
                                            fontSize: 16,
                                            textAlign: 'center',
                                        }}
                                    >
                                        INTEGRANTE  {i.id_integrante}
                                    </Text>
                                </View>
                            ))}


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
                </Modal>
            </ScrollView>
        </View>
    )
}
