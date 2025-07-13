import { View, Text, TextInput, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useFonts } from "expo-font";
import { styles } from "../styles/styles";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useSelector, useDispatch } from "react-redux";
import { addCosto, delCosto } from "../redux/viajesSlice";
import { useState } from "react";

export const Costos = () => {

    const dispatch = useDispatch();
    const costos = useSelector(state => state.viajes.costos)

    const [tipo, setTipo] = useState('')
    const [monto, setMonto] = useState('')

    const costo = { id: Date.now(), tipo, monto }

    //FUNCION ADDCOSTO DISPATCH Y LIMPIO ESTADOS
    const AddCosto = (costo) => {
        if (!tipo) {
            console.log('COSTOS - Campo descripcion vacio')
            return
        } else if (!monto) {
            console.log('COSTOS - Campo monto vacio')
            return
        }
        setTipo('')
        setMonto('')
        dispatch(addCosto(costo))
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
        <View style={styles.containerform}>
            <Text
                style={[{ fontFamily: "Lilita_One" },
                styles.txttitle]}>
                Agrega tus costos !
            </Text>

            <FontAwesome6
                name="money-bill-1"
                size={24} color="black"
                style={styles.iconos}
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrese una descripcion"
                value={tipo}
                onChangeText={setTipo}
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrese un monto"
                value={monto}
                onChangeText={setMonto}
            />

            <Pressable
                style={styles.btnEstandar}
                onPress={() => AddCosto(costo)}
            >
                <Text
                    style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                    Agregar Costo
                </Text>
            </Pressable>

            {(!costos || costos.length === 0) && (
                <Text style={[{ fontFamily: "Lilita_One" },
                styles.txttitle]}>
                    En el momento no ahi costos cargados !
                </Text>
            )}

            {costos.map(c => (
                <View
                    key={c.id}
                    style={styles.containerlistchek}
                >
                    <Text
                        style={{
                            fontFamily: "Lilita_One",
                            fontSize: 16,
                            textAlign: 'center'
                        }}
                    >
                        {c.tipo}
                    </Text>

                    <Text
                        style={{
                            fontSize: 16,
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}
                    >
                        $ {c.monto}
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >

                        <MaterialIcons
                            name="delete"
                            size={30}
                            color="#3868A6"
                            onPress={() => dispatch(delCosto({ id: c.id }))}
                        />
                    </View>
                </View>
            ))}
        </View>
    )
}
