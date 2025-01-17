import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import Navigation from './src/navigation';
import ProductScreen from './src/screens/ProductScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

