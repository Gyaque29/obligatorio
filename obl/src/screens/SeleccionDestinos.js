import { useEffect, useState } from "react";
import { View, Text, Pressable, ScrollView, Modal } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { addDestino, delDestino } from '../redux/viajesSlice';
import { getDestinos } from '../database/database';
import { styles } from "../styles/styles";

export const SeleccionDestinos = () => {

  const dispatch = useDispatch();
  const seleccionados = useSelector(state => state.viajes.destinos);

  const [modal, setModal] = useState(false);
  const [destinos, setDestinos] = useState([]);

  //CARGA DESTINOS
  const cargarDestinos = () => {
    getDestinos().then(data => setDestinos(data));
  };

  const abrirModal = () => {
    setModal(true);
    cargarDestinos();
  };

  useEffect(() => {
    cargarDestinos();
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
            Agrega Destinos
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
              Integrantes Destinos !
            </Text>


            {seleccionados.map(d => (
              <View
                key={d.id}
                style={styles.containerlistchek}
              >
                <Text
                  style={{
                    fontFamily: "Lilita_One",
                    fontSize: 16,
                    textAlign: 'center'
                  }}
                >
                  {d.nombre}
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center'
                  }}
                >
                  {d.lat}
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center'
                  }}
                >
                  {d.long}
                </Text>

                <FontAwesome
                  name="remove"
                  size={30}
                  style={styles.iconos}
                  onPress={() => dispatch(delDestino(d))}
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
              Seleccionar Destinos !
            </Text>

            {(!destinos || destinos.length === 0) && (
              <Text style={[{ fontFamily: "Lilita_One" },
              styles.txttitle]}>
                En el momento no ahi destinos cargadas !
              </Text>
            )}

            {destinos.map(d => (
              <View
                key={d.id}
                style={styles.containerlistchek}
              >
                <Text
                  style={{
                    fontFamily: "Lilita_One",
                    fontSize: 16,
                    textAlign: 'center'
                  }}
                >
                  {d.nombre}
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center'
                  }}
                >
                  {d.lat}
                </Text>

                <Text
                  style={{
                    fontSize: 16,
                    textAlign: 'center'
                  }}
                >
                  {d.long}
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
                    onPress={() => dispatch(addDestino(d))}
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