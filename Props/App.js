
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person/Person';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar/>

      <Person  name={"Rodrigo"} age={"23"}/>
      <Person name={"Larissa"} age={"17"}/>
      <Person name={"Jonnas"} age={"21"}/>
      <Person name={"Vanessa"} age={"29"}/>
      <Person name={"Caio"} age={"21"}/>
      <Person name={"Fransico"} age={"18"}/>
    </SafeAreaView>
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
