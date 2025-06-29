import { View, Text, TextInput, Pressable, Modal } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../styles/styles";
import { useState, useEffect } from "react";
import { addDestino, getDestinos, deleteDestino, editDestino } from "../database/database";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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
    const [selectId, setselectselectId] = useState('');

    //LLAMO AL METODO Y LE PASO LOS DATOS
    const InsertDestino = () => {
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
        setselectselectId(destinos.id)
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
            <Text
                style={[{ fontFamily: "Lilita_One" },
                styles.texttitleseccion]}>
                Ingresa tus destinos !
            </Text>

            <FontAwesome6
                style={styles.iconos}
                name="map-location-dot"
                size={24} color="black" />

            <TextInput
                style={styles.input}
                placeholder="Ingrese un nombre"
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrese una latitud"
                value={lat}
                onChangeText={setLat}
            />

            <TextInput
                style={styles.input}
                placeholder="Ingrese una longitud"
                value={long}
                onChangeText={setLong}
            />

            <Pressable
                style={styles.btnAgregar}
                onPress={() => InsertDestino()}
            >
                <Text
                    style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                    Agregar Destino
                </Text>
            </Pressable>

            {/*MAPEO EL ESTADO QUE TIENE LOS DESTINOS */}
            {destinos.map((destinos) => (
                <View style={styles.containerlist}>
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
                        key={destinos.id}>
                        {destinos.nombre}
                    </Text>

                    <Text
                        style={{ fontSize: 16, textAlign: 'center' }}
                        key={destinos.id}>
                        {destinos.lat}
                    </Text>

                    <Text
                        style={{ fontSize: 16, textAlign: 'center' }}
                        key={destinos.id}>
                        {destinos.long}
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
                            onPress={() => abrirModalEditar(destinos)}
                        />

                        <MaterialIcons
                            name="delete"
                            size={24}
                            color="#3868A6"
                            onPress={() => delDestino(destinos.id)}
                        />
                    </View>

                    {/*MODAL DE EDITAR DESTINO*/}
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
                                    value={selectLat}
                                    onChangeText={setselectLat}
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="Ingrese un telefono"
                                    value={selectLong}
                                    onChangeText={setselectLong}
                                />

                                <Pressable
                                    style={styles.btnAgregar}
                                    onPress={() => EditarDestino(selectId, selectNombre, selectLat, selectLong)}
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
        </View>
    )
}
