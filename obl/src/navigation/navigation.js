import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//FUENTES Y ICONOS
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useFonts } from "expo-font"

//COMPONENTES DE PANTALLAS
import { Home } from '../screens/Home';
import { Viajes } from '../screens/Viajes';
import { Destino } from '../screens/Destino';
import { Personas } from '../screens/Personas';

const Tab = createBottomTabNavigator();

const MyTabs = () => {

    let [fontsLoaded] = useFonts({
        Chicle: require('../font/Chicle/Chicle-Regular.ttf'),

        DynaPuff: require('../font/DynaPuff/static/DynaPuff_Condensed-Bold.ttf'),
        DynaPuff2: require('../font/DynaPuff/static/DynaPuff_Condensed-Medium.ttf'),

        Lilita_One: require('../font/Lilita_One/LilitaOne-Regular.ttf'),
    });

    if (!fontsLoaded) return null

    return (

        <Tab.Navigator>
            <Tab.Screen name="PANTALLA DE INICIO"
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarLabelStyle: { fontFamily: 'Lilita_One' },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: 'DynaPuff',
                        fontSize: 22, 
                    },
                        tabBarIcon: () => (
                            <FontAwesome name="home" size={24} color="black" />
                        ),
                        //tabBarBadge: 0
                    }
                }
                component={Home} />

            <Tab.Screen name="PANTALLA VIAJES"
                options={{
                    tabBarLabel: 'Viajes',
                    tabBarLabelStyle: { fontFamily: 'Lilita_One' },
                    tabBarLabelStyle: { fontFamily: 'Lilita_One' },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: 'DynaPuff',
                        fontSize: 22, 
                    },
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="airplane-plus" size={24} color="black" />
                    ),
                    //tabBarBadge: 0
                }}
                component={Viajes} />

            <Tab.Screen name="PANTALLA PERSONAS"
                options={{
                    tabBarLabel: 'Personas',
                    tabBarLabelStyle: { fontFamily: 'Lilita_One' },
                    tabBarLabelStyle: { fontFamily: 'Lilita_One' },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: 'DynaPuff',
                        fontSize: 22, 
                    },
                    tabBarIcon: () => (
                        <FontAwesome6 name="person-circle-plus" size={24} color="black" />
                    ),
                    //tabBarBadge: 0
                }}
                component={Personas} />

            <Tab.Screen name="PANTALLA DESTINO"
                options={{
                    tabBarLabel: 'Destino',
                    tabBarLabelStyle: { fontFamily: 'Lilita_One' },
                    tabBarLabelStyle: { fontFamily: 'Lilita_One' },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: 'DynaPuff',
                        fontSize: 22, 
                    },
                    tabBarIcon: () => (
                        <AntDesign name="enviroment" size={24} color="black" />
                    ),
                    //tabBarBadge: 0
                }}
                component={Destino} />
        </Tab.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}

export default Navigation;


