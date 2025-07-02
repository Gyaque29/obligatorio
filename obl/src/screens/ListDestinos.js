import { View, Text, TextInput, Pressable, Modal } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { styles } from "../styles/styles";

export const ListaDestinos = ({
    destinos,
    abrirModalEditar,
    delDestino,
    modal,
    setModal,
    selectId,
    selectNombre,
    setselectNombre,
    selectLat,
    setselectLat,
    selectLong,
    setselectLong,
    EditarDestino
}) => {
    return (
        <>
            {destinos.map((destino) => (
                <View
                    key={destino.id}
                    style={styles.containerlist}
                >

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
                            textAlign: 'center'
                        }}
                    >
                        {destino.nombre}
                    </Text>

                    <Text
                        style={{
                            fontSize: 16,
                            textAlign: 'center'
                        }}
                    >
                        {destino.lat}
                    </Text>

                    <Text
                        style={{
                            fontSize: 16,
                            textAlign: 'center'
                        }}
                    >
                        {destino.long}
                    </Text>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >

                        <FontAwesome6
                            name="edit"
                            size={24}
                            color="#3868A6"
                            onPress={() => abrirModalEditar(destino)}
                        />

                        <MaterialIcons
                            name="delete"
                            size={24}
                            color="#3868A6"
                            onPress={() => delDestino(destino.id)}
                        />
                    </View>
                </View>
            ))}

            {/* MODAL DE EDICIÓN */}
            <Modal
                visible={modal}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModal(false)}
            >
                <View
                    style={styles.ModalEditarPersonas}
                >
                    <View
                        style={styles.containerEdicionP}
                    >
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
                            placeholder="Ingrese una latitud"
                            value={selectLat}
                            onChangeText={setselectLat}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Ingrese una longitud"
                            value={selectLong}
                            onChangeText={setselectLong}
                        />

                        <Pressable
                            style={styles.btnEstandar}
                            onPress={() => EditarDestino(selectId, selectNombre, selectLat, selectLong)}
                        >
                            <Text style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                                Enviar Edición
                            </Text>
                        </Pressable>

                        <Pressable
                            style={styles.btnEstandar}
                            onPress={() => setModal(false)}
                        >
                            <Text style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'black' }}>
                                Cancelar Edición
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    );
};