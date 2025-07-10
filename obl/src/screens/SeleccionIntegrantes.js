import { useEffect, useState } from "react";
import { View, Text, Pressable, ScrollView, Modal } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { addPersona, delPersona } from '../redux/viajesSlice';
import { getPersonas } from '../database/database';
import { styles } from "../styles/styles";

export const SeleccionIntegrantes = () => {
  const dispatch = useDispatch();
  const seleccionados = useSelector(state => state.viajes.integrantes);

  const [modal, setModal] = useState(false);
  const [personas, setPersonas] = useState([]);

  // Carga personas
  const cargarPersonas = () => {
    getPersonas().then(data => setPersonas(data));
  };

  const abrirModal = () => {
    setModal(true);
    cargarPersonas();
  };

  useEffect(() => {
    cargarPersonas();
  }, []);

  return (
    <>
      <View style={styles.containerform}>
        <Pressable
          style={styles.btnEstandar}
          onPress={abrirModal}
        >
          <Text
            style={{
              fontFamily: "Lilita_One",
              fontSize: 16,
              color: 'white'
            }}
          >
            Agrega Integrantes
          </Text>
        </Pressable>
      </View>

      <Modal
        visible={modal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModal(false)}
      >
        <ScrollView>
          <View
            style={styles.ModalEditar}
          >
            <Text
              style={{
                fontFamily: "Lilita_One",
                fontSize: 26,
                color: 'white',
                margin: 15
              }}
            >
              Integrantes Seleccionados !
            </Text>

            {seleccionados.map(p => (
              <View
                key={p.id}
                style={styles.containerlistchek}
              >
                <Text
                  style={{
                    fontFamily: "Lilita_One",
                    fontSize: 16,
                    textAlign: 'center'
                  }}
                >
                  {p.nombre}
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center'
                  }}
                >
                  {p.telefono}
                </Text>

                <FontAwesome
                  name="remove"
                  size={30}
                  style={styles.iconos}
                  onPress={() => dispatch(delPersona(p))}
                />
              </View>
            ))}

            <Text
              style={{
                fontFamily: "Lilita_One",
                fontSize: 26,
                color: 'white',
                margin: 15
              }}
            >
              Seleccionar Integrantes !
            </Text>

            {(!personas || personas.length === 0) && (
              <Text style={[{ fontFamily: "Lilita_One" },
              styles.txttitle]}>
                En el momento no ahi personas cargadas !
              </Text>
            )}

            {personas.map(persona => (
              <View
                key={persona.id}
                style={styles.containerlistchek}
              >
                <Text
                  style={{
                    fontFamily: "Lilita_One",
                    fontSize: 16,
                    textAlign: 'center'
                  }}
                >
                  {persona.nombre}
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center'
                  }}
                >
                  {persona.telefono}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <MaterialIcons
                    name="add"
                    size={30}
                    style={styles.iconos}
                    onPress={() => dispatch(addPersona(persona))}
                  />
                </View>
              </View>
            ))}

            <Pressable
              style={styles.btnEstandar}
              onPress={() => setModal(false)}
            >
              <Text
                style={{
                  fontFamily: "Lilita_One",
                  fontSize: 16,
                  color: 'black'
                }}
              >
                Cerrar Seleccion
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </Modal>
    </>
  );
};