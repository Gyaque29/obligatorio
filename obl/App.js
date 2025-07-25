import { StatusBar } from 'expo-status-bar'
import { View, } from 'react-native'
import store from './src/redux/store'
import { Provider } from 'react-redux';
import { styles } from "./src/styles/styles";
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
        <StatusBar style="dark" />
      </View>
    </Provider>
  );
}

