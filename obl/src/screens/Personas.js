import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../styles/styles";

export const Personas = () => {
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
             <Text style={[{ fontFamily: "Lilita_One" }, styles.texttitleseccion]}>Agrega integrantes al viaje !</Text>
        </View>
    )
}
