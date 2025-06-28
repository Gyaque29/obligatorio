import { View, Text, TextInput, Pressable, ScrollView, Modal } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../styles/styles";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect, useState } from "react";
import { addPersona, getPersonas, deletePersona, editarPersona } from '../database/database';

export const Personas = () => {

    //ESTADOS PARA FORMULARIO
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    //ESTADO PARA CARGAR PERSONAS
    const [personas, setPersonas] = useState([]);

    //ESTADO PARA CONTROLAR MODAL Y HACER LA EDICION DEL SELECCIONADO
    const [modal, setModal] = useState(false);
    const [selectNombre, setselectNombre] = useState('');
    const [selectTel, setselectselectTel] = useState('');
    const [selectId, setselectselectId] = useState('');

    //ABRO EL MODAL Y CARGO LA PERSONA SELECCIONADA
    const abrirModalEditar = (persona) => {
        setselectNombre(persona.nombre)
        setselectselectTel(persona.telefono)
        setselectselectId(persona.id)
        setModal(true);
    }

    //EDITO LA PERSONA SELECCIONADA QUE GUARDE EN LOS ESTADOS
    const EditarPersona = (id, nombre, telefono) => {
        editarPersona(id, nombre, telefono);
        setselectNombre('');
        setselectselectTel('');
        setselectselectId('');
        setModal(false);
    }

    //LLAMO AL METODO Y LE PASO LOS DATOS
    const InsertPersona = () => {
        addPersona(nombre, telefono)
            .then(() => {
                setNombre('');
                setTelefono('');
                CargarPersonas();
            })
    }

    //METODO PARA CARGAR PERSONAS AL RENDER
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
                    style={[{ fontFamily: "Lilita_One" },
                    styles.texttitleseccion]}>
                    Agrega integrantes al viaje !
                </Text>

                <FontAwesome6
                    style={styles.iconos}
                    name="person"
                    size={30}
                    color="black"
                />

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

                {/*MAPEO EL ESTADO QUE TIENE LAS PERSONAS */}
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
                            alignItems: 'center'
                        }}>

                            {/*ICONOS DE EDICION (ABRE MODAL) Y DELETE PERSONAS */}
                            <FontAwesome6
                                name="edit"
                                size={24}
                                color="#3868A6"
                                onPress={() => abrirModalEditar(personas)}
                            />

                            <MaterialIcons
                                name="delete"
                                size={24}
                                color="#3868A6"
                                onPress={() => DelPersona(personas.id)}
                            />
                        </View>

                        {/*MODAL DE EDITAR PERSONA*/}
                        <Modal
                            visible={modal}
                            transparent={true}
                            animationType="slide"
                            onRequestClose={() => setModal(false)}>
                            <View style={styles.ModalEditarPersonas}>
                                <View style={styles.containerEdicionP}>
                                    <Text style={{
                                        fontFamily: "Lilita_One",
                                        fontSize: 25,
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        marginTop: 25,
                                        color: 'white',
                                    }}>
                                        Editar Seleccionado
                                    </Text>

                                    <FontAwesome6
                                        name="edit"
                                        size={24}
                                        style={styles.iconos}
                                    />

                                    <TextInput
                                        style={styles.input}
                                        placeholder="Ingrese un nombre"
                                        value={selectNombre}
                                        onChangeText={setselectNombre}
                                    />

                                    <TextInput
                                        style={styles.input}
                                        placeholder="Ingrese un telefono"
                                        value={selectTel}
                                        onChangeText={setselectselectTel}
                                    />

                                    <Pressable
                                        style={styles.btnAgregar}
                                        onPress={() => EditarPersona(selectId, selectNombre, selectTel)}
                                    >
                                        <Text
                                            style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                                            Enviar Edicion
                                        </Text>
                                    </Pressable>

                                    <Pressable
                                        style={styles.btnAgregar}
                                        onPress={() => setModal(false)}
                                    >
                                        <Text
                                            style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'black' }}>
                                            Cancelar Edicion
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
