import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../styles/styles";
import { Costos } from "./Costos";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Calendar } from "./Calendar";
import { useState } from "react";

export const Viajes = () => {

    //ESTADOS PARA MENJAR LAS FECHAS DE INICIO Y FIN Y CALENDARIO
    const [fechaInicio, setFechaInicio] = useState(null);
    const [fechaFin, setFechaFin] = useState(null);
    const [mostrarCalendario, setMostrarCalendario] = useState(false);
    const [mostrarCalendario2, setMostrarCalendario2] = useState(false);

    //ESTADO PARA MANEJAR NOMBRE VIAJE
    const [nombre, setNombre] = useState('');

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
                <View style={styles.containerformViajes}>
                    <Text
                        style={[{ fontFamily: "Lilita_One" },
                        styles.texttitleseccion]}>
                        Crea un nuevo viaje !
                    </Text>

                    <FontAwesome6
                        style={styles.iconos}
                        name="plane-departure"
                        size={24} color="black"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese un nombre"
                        value={nombre}
                        onChangeText={setNombre}
                    />

                    <View style={{ padding: 20 }}>
                        {/* BOTON QUE MUESTRA LA FECHA INICIO SELECCIONADA */}
                        <Pressable

                            onPress={() => setMostrarCalendario(!mostrarCalendario)}
                            style={styles.btnFechas}
                        >
                            <Text style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                                Fecha Inicio: {fechaInicio ? fechaInicio.toLocaleDateString() : 'Seleccionar'}
                            </Text>
                        </Pressable>

                        {/* MOSTRAMOS EL CALENDARIO SOLO SI SE MUESTRA EN EL BOTON */}
                        {mostrarCalendario && (
                            <Calendar
                                date={fechaInicio}
                                onSelect={(fecha) => {
                                    setFechaInicio(fecha);
                                    setMostrarCalendario(false); // SE OCULTA LUEGO DE ELEGIR
                                }}
                            />
                        )}

                        {/* BOTON QUE MUESTRA LA FECHA FIN SELECCIONADA */}
                        <Pressable
                            onPress={() => setMostrarCalendario2(!mostrarCalendario2)}
                            style={styles.btnFechas}
                        >
                            <Text style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                                Fecha Fin: {fechaFin ? fechaFin.toLocaleDateString() : 'Seleccionar'}
                            </Text>
                        </Pressable>

                        {/* MOSTRAMOS EL CALENDARIO SOLO SI SE MUESTRA EN EL BOTON */}
                        {mostrarCalendario2 && (
                            <Calendar
                                date={fechaInicio}
                                onSelect={(fecha) => {
                                    setFechaFin(fecha);
                                    setMostrarCalendario2(false); // SE OCULTA LUEGO DE ELEGIR
                                }}
                            />
                        )}
                    </View>
                </View>   
                        
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
