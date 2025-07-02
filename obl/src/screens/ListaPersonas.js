import { View, Text, Modal, TextInput, Pressable } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { styles } from "../styles/styles";

export const ListaPersonas = ({
    personas,
    abrirModalEditar,
    DelPersona,
    modal,
    setModal,
    selectNombre,
    setselectNombre,
    selectTel,
    setselectTel,
    selectId,
    editarPersona,
}) => {
    return (
        <>
            {/*MAPEO EL ESTADO QUE TIENE LAS PERSONAS */}
            {personas.map((personas) => (
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
                </View>
            ))}

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
                            onChangeText={setselectTel}
                        />

                        <Pressable
                            style={styles.btnEstandar}
                            onPress={() => editarPersona(selectId, selectNombre, selectTel)}
                        >
                            <Text
                                style={{ fontFamily: "Lilita_One", fontSize: 16, color: 'white' }}>
                                Enviar Edicion
                            </Text>
                        </Pressable>

                        <Pressable
                            style={styles.btnEstandar}
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
        </>
    )
}