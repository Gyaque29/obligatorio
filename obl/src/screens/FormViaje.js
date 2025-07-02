import { Calendar } from "./Calendar";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { styles } from "../styles/styles";

export const FormViaje = ({
    nombre, setNombre,
    fechaInicio, setFechaInicio,
    fechaFin, setFechaFin

}) => {

    //ESTADOS PARA MANEJAR CALENDARIO 
    const [mostrarCalendario, setMostrarCalendario] = useState(false);
    const [mostrarCalendario2, setMostrarCalendario2] = useState(false);

    return (
        <View style={styles.containerformViajes}>
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

    )
}
