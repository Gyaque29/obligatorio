import { View, Text, TextInput, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../styles/styles";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
//import { useSelector, useDispatch } from 'react-redux';
//import { addPersona } from '../redux/PersonasSlice';

export const Personas = () => {

    //const personas = useSelector((state) => state.personas.value);
    //const dispatch = useDispatch();

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');

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
                //onPress={()=> dispatch(addPersona)}
            >
                <Text
                    style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                    Agregar Persona
                </Text>
            </Pressable>
        </View>
    )
}
