
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Person from './src/components/Person/Person';
import { useFonts, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter'

export default function App() {

  const peopleList = [
    { id: '1', name: 'Rodrigo', age: 23 },
    { id: '2', name: 'Larissa', age: 17 },
    { id: '3', name: 'Jonnas', age: 21 },
    { id: '4', name: 'Vannesa', age: 29 },
    { id: '5', name: 'Caio', age: 21 },
    { id: '6', name: 'Fransisco', age: 18 }
  ]

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar/>

      <FlatList
        data={peopleList}
        keyExtractor={(item) => item.id}

        renderItem={({item}) => (
          //exebir cada item da lista
          <Person name={item.name} age={item.age}/>
        )}
      />

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
