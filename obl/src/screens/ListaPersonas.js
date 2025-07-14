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
            {(!personas || personas.length === 0) && (
                <Text style={[{ fontFamily: "Lilita_One" },
                styles.txttitle]}>
                    En el momento no ahi integrantes cargados
                </Text>
            )}

            {/*MAPEO EL ESTADO QUE TIENE LAS PERSONAS */}
            {personas.map((personas) => (
                <View style={styles.containerlist}
                    key={personas.id}    >
                    <FontAwesome6
                        style={styles.iconos}
                        name="contact-card"
                        size={30}
                        color="black"
                    />

                    <Text
                        style={{
                            fontFamily: "Lilita_One",
                            fontSize: 16,
                            textAlign: 'center',
                        }}
                    >
                        {personas.nombre}
                    </Text>

                    <Text
                        style={{ fontSize: 16, textAlign: 'center' }}
                    >
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
                            size={30}
                            color="#3868A6"
                            onPress={() => abrirModalEditar(personas)}
                        />

                        <MaterialIcons
                            name="delete"
                            size={30}
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
                onRequestClose={() => setModal(false)}
            >
                <View
                    style={styles.ModalEditar}
                >
                    <View
                        style={styles.containerEdicion}
                    >
                        <Text style={{
                            fontFamily: "Lilita_One",
                            fontSize: 25,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginTop: 25,
                            color: 'white',
                        }}>
                            Editar Persona Seleccionado
                        </Text>

                        <FontAwesome6
                            name="edit"
                            size={30}
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