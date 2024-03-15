import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar/>
      <Navigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  
});
