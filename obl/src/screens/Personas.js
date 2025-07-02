import { View, Text, TextInput, Pressable, ScrollView, Modal } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../styles/styles";
import { useEffect, useState } from "react";
import { addPersona, getPersonas, deletePersona, editarPersona } from '../database/database';
import { FormPersonas } from "./FormPersonas";
import { ListaPersonas } from "./ListaPersonas";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export const Personas = () => {

    //ESTADOS PARA FORMULARIO
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

    //ESTADO PARA CARGAR PERSONAS
    const [personas, setPersonas] = useState([]);

    //ESTADO PARA CONTROLAR MODAL Y HACER LA EDICION DEL SELECCIONADO
    const [modal, setModal] = useState(false);
    const [selectNombre, setselectNombre] = useState('');
    const [selectTel, setselectTel] = useState('');
    const [selectId, setselectId] = useState('');

    //ABRO EL MODAL Y CARGO LA PERSONA SELECCIONADA
    const abrirModalEditar = (persona) => {
        setselectNombre(persona.nombre)
        setselectTel(persona.telefono)
        setselectId(persona.id)
        setModal(true);
    }

    //EDITO LA PERSONA SELECCIONADA QUE GUARDE EN LOS ESTADOS
    const EditarPersona = (id, nombre, telefono) => {
        editarPersona(id, nombre, telefono)
            .then(() => {
                setselectNombre('');
                setselectTel('');
                setselectId('');
                CargarPersonas();
                setModal(false);
            })

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
                    styles.txttitle]}>
                    Agrega integrantes al viaje !
                </Text>

                <FontAwesome6
                    style={styles.iconos}
                    name="person"
                    size={30}
                    color="black"
                />

                <FormPersonas
                    nombre={nombre}
                    setNombre={setNombre}
                    telefono={telefono}
                    setTelefono={setTelefono}
                    onAgregar={InsertPersona}
                />

                <ListaPersonas
                    personas={personas}
                    abrirModalEditar={abrirModalEditar}
                    DelPersona={DelPersona}
                    modal={modal}
                    setModal={setModal}
                    selectNombre={selectNombre}
                    setselectNombre={setselectNombre}
                    selectTel={selectTel}
                    setselectTel={setselectTel}
                    selectId={selectId}
                    setselectId={setselectId}
                    editarPersona={EditarPersona}
                />
            </ScrollView>
        </View>
    )
}
