import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import store from './src/redux/store'
import { Provider } from 'react-redux';
import { styles } from "./src/styles/styles";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Hola</Text>
        <StatusBar style="dark" />
      </View>
    </Provider>
  );
}

