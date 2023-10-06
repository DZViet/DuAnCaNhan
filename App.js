import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './demo/Welcome';
import Demo from './demo/Demo';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './ultil/AppNavigator';
import { AppContextProvider } from './ultil/AppContext';

import NavigationDemo from './ultil/NavigationDemo';
export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Welcome/>
    </View>

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
