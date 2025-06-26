import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';

import { Home } from '../screens/Home';
import { Viajes } from '../screens/Viajes';
import { Destino } from '../screens/Destino';
import { Personas } from '../screens/Personas';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="PANTALLA DE INICIO"
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: () => (
                        <FontAwesome name="home" size={24} color="black" />
                    ),
                    //tabBarBadge: 0
                }}
                component={Home} />

            <Tab.Screen name="PANTALLA VIAJES"
                options={{
                    tabBarLabel: 'Viajes',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="airplane-plus" size={24} color="black" />
                    ),
                    //tabBarBadge: 0
                }}
                component={Viajes} />

            <Tab.Screen name="PANTALLA PERSONAS"
                options={{
                    tabBarLabel: 'Personas',
                    tabBarIcon: () => (
                        <FontAwesome6 name="person-circle-plus" size={24} color="black" />
                    ),
                    //tabBarBadge: 0
                }}
                component={Personas} />

            <Tab.Screen name="PANTALLA DESTINO"
                options={{
                    tabBarLabel: 'Destino',
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


