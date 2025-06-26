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
                    tabBarLabel: 'INICIO',
                    tabBarStyle: { backgroundColor: '#FC4A1A' },
                    tabBarLabelStyle: { fontFamily: 'Lilita_One', color:'white'},
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#FC4A1A' },
                    headerTitleStyle: {
                        fontFamily: 'DynaPuff',
                        fontSize: 30,
                        color: 'white',
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
                    tabBarLabel: 'VIAJES',
                    tabBarLabelStyle: { fontFamily: 'Lilita_One', color:'white' },
                    tabBarStyle: { backgroundColor: '#FC4A1A' },
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#FC4A1A' },
                    headerTitleStyle: {
                        fontFamily: 'DynaPuff',
                        fontSize: 30,
                        color: 'white',
                    },
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="airplane-plus" size={24} color="black" />
                    ),
                    //tabBarBadge: 0
                }}
                component={Viajes} />

            <Tab.Screen name="PANTALLA PERSONAS"
                options={{
                    tabBarLabel: 'PERSONAS',
                    tabBarLabelStyle: { fontFamily: 'Lilita_One' },
                    tabBarStyle: { backgroundColor: '#FC4A1A' },
                    tabBarLabelStyle: { fontFamily: 'Lilita_One', color: 'white'},
                    headerStyle: { backgroundColor: '#FC4A1A' },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: 'DynaPuff',
                        fontSize: 30,
                        color: 'white',
                    },
                    tabBarIcon: () => (
                        <FontAwesome6 name="person-circle-plus" size={24} color="black" />
                    ),
                    //tabBarBadge: 0
                }}
                component={Personas} />

            <Tab.Screen name="PANTALLA DESTINO"
                options={{
                    tabBarLabel: 'DESTINOS',
                    tabBarLabelStyle: { fontFamily: 'Lilita_One' },
                    headerStyle: { backgroundColor: '#FC4A1A' },
                    tabBarStyle: { backgroundColor: '#FC4A1A' },
                    tabBarLabelStyle: { fontFamily: 'Lilita_One', color: 'white'},
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: 'DynaPuff',
                        fontSize: 30,
                        color: 'white',
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


