import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { Settings } from '../screens/Settings';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home"
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="account" size={24} color="gray" />
                    ),
                    tabBarBadge: 0
                }}
                component={Home} />

            <Tab.Screen name="Settings" component={Settings} />
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


