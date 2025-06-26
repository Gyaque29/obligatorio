import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import store from './src/redux/store'
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Text>Hola mundo</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
