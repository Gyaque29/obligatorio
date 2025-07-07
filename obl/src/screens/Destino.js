import { View, Text, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import { useState, useEffect } from "react";
import { addDestino, getDestinos, deleteDestino, editDestino } from "../database/database";
import { FormDestino } from "./FormDestinos";
import { ListaDestinos } from "./ListDestinos";
import { styles } from "../styles/styles";

export const Destino = () => {
    //ESTADOS PARA FORMULARIOS
    const [nombre, setNombre] = useState('');
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');

    //ESTADO PARA CARGAR DESTINOS
    const [destinos, setDestinos] = useState([]);

    //ESTADO PARA CONTROLAR MODAL Y HACER LA EDICION DEL SELECCIONADO
    const [modal, setModal] = useState(false);
    const [selectNombre, setselectNombre] = useState('');
    const [selectLat, setselectLat] = useState('');
    const [selectLong, setselectLong] = useState('');
    const [selectId, setselectid] = useState('');

    //LLAMO AL METODO Y LE PASO LOS DATOS
    const InsertDestino = () => {
        if (!nombre) {
            console.log('DESTINOS - Cambo nombre vacio')
            return
        }
        else if (!lat) {
            console.log('DESTINOS - Campo latitud vacio')
            return
        } else if (!long) {
            console.log('DESTINOS - Campo longitud vacio')
            return
        }

        addDestino(nombre, lat, long)
            .then(() => {
                setNombre('');
                setLat('');
                setLong('');
                CargarDestinos();
            })
    }

    //EDITO EL DESTINO SELECCIONADA QUE GUARDE EN LOS ESTADOS
    const EditarDestino = (id, nombre, lat, long) => {
        editDestino(id, nombre, lat, long)
            .then(() => {
                setselectNombre('');
                setselectLat('');
                setselectLong('');
                CargarDestinos();
                setModal(false);
            })

    }

    //METODO PARA CARGAR DESTINOS AL RENDER
    const CargarDestinos = () => {
        getDestinos().then((data) => {
            setDestinos(data);
        });
    }

    //ABRO EL MODAL Y CARGO LA DESTINOS SELECCIONADO
    const abrirModalEditar = (destinos) => {
        setselectNombre(destinos.nombre)
        setselectLat(destinos.lat)
        setselectLong(destinos.lat)
        setselectid(destinos.id)
        setModal(true);
    }

    //METODO PARA ELIMINAR UNA PERSONA
    const delDestino = (id) => {
        deleteDestino(id)
            .then(() => {
                CargarDestinos();
            })
    }

    //USE EFECT PARA CARGAR METODO DE CARGAR PERSONAS
    useEffect(() => {
        CargarDestinos();
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
                    Agrega nuevos destinos !
                </Text>

                <FormDestino
                    nombre={nombre}
                    setNombre={setNombre}
                    lat={lat}
                    setLat={setLat}
                    long={long}
                    setLong={setLong}
                    onAgregar={InsertDestino}
                />

                <ListaDestinos
                    destinos={destinos}
                    abrirModalEditar={abrirModalEditar}
                    delDestino={delDestino}
                    modal={modal}
                    setModal={setModal}
                    selectId={selectId}
                    selectNombre={selectNombre}
                    setselectNombre={setselectNombre}
                    selectLat={selectLat}
                    setselectLat={setselectLat}
                    selectLong={selectLong}
                    setselectLong={setselectLong}
                    EditarDestino={EditarDestino}
                />
            </ScrollView>
        </View>
    )
}
