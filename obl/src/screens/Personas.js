import { View, Text, TextInput, Pressable, ScrollView, } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../styles/styles";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect, useState } from "react";
import { addPersona, getPersonas, deletePersona } from '../database/database';



export const Personas = () => {

    //ESTADOS PARA FORMULARIO
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    //ESTADO PARA CARGAR PERSONAS
    const [personas, setPersonas] = useState([]);

    //LLAMO AL METODO Y LE PASO LOS DATOS
    const InsertPersona = () => {
        addPersona(nombre, telefono)
            .then(() => {
                setNombre('');
                setTelefono('');
                CargarPersonas();
            })

    }

    //METODO PARA CARGAR PERSONAS
    const CargarPersonas = () => {
        getPersonas().then((data) => {
            setPersonas(data);
        });
    }

    //METODO PARA ELIMINAR UNA PERSONA
    const DelPersona = (id) => {
        deletePersona(id)
            .then(() => {
                CargarPersonas();
            })
    }

    //USE EFECT PARA CARGAR METODO DE CARGAR PERSONAS
    useEffect(() => {
        CargarPersonas();
    }, []);

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
                    style={[{ fontFamily: "Lilita_One" }, styles.texttitleseccion]}>
                    Agrega integrantes al viaje !
                </Text>

                <FontAwesome6
                    style={styles.iconos}
                    name="person"
                    size={30}
                    color="black" />

                <TextInput
                    style={styles.input}
                    placeholder="Ingrese un nombre"
                    value={nombre}
                    onChangeText={setNombre}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Ingrese un telefono"
                    value={telefono}
                    onChangeText={setTelefono}
                />

                <Pressable
                    style={styles.btnAgregar}
                    onPress={() => InsertPersona()}
                >
                    <Text
                        style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                        Agregar Persona
                    </Text>
                </Pressable>


                {personas.map((personas) => (
                    <View style={styles.containerlistpersona}>
                        <FontAwesome6
                            style={styles.iconos}
                            name="contact-card"
                            size={24}
                            color="black"
                        />
                        <Text
                            style={{
                                fontFamily: "Lilita_One",
                                fontSize: 16,
                                textAlign: 'center',
                            }}
                            key={personas.id}>
                            {personas.nombre}
                        </Text>

                        <Text
                            style={{ fontSize: 16, textAlign: 'center' }}
                            key={personas.id}>
                            {personas.telefono}
                        </Text>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'}}>

                            <FontAwesome6
                                name="edit"
                                size={24}
                                color="#3868A6" />

                            <MaterialIcons
                                name="delete"
                                size={24}
                                color="#3868A6"
                                onPress={() => DelPersona(personas.id)} />
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
