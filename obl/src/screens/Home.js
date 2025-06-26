import { View, Text } from "react-native"
import { useFonts } from "expo-font"

export const Home = () => {
    let [fontsLoaded] = useFonts({
        Dayna: require('../font/static/DynaPuff_Condensed-Bold.ttf'),
    });

    if (!fontsLoaded) return null

    return (
        <View>
            <Text style={{ fontFamily: "Dayna" }}>pantalla</Text>
        </View>
    )
}
