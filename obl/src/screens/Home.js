import { View, Text } from "react-native"
import { useFonts } from "expo-font"
import { styles } from "../styles/styles";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const Home = () => {
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
                styles.txttitle]}>
                Bienvenidos !
            </Text>

            <MaterialCommunityIcons
                name="hand-clap"
                size={24}
                color="black"
                style={styles.iconos}
            />
        </View>
    )
}
