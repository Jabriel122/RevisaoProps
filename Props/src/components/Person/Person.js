import { StyleSheet, Text, View } from "react-native";
import { useFonts, Inter_600SemiBold, Inter_400Regular } from '@expo-google-fonts/inter'
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
//Components Person
//Props: name, age

const Person = ({ name, age }) => {

    let [fontsLoaded, fontError] = useFonts({
        Inter_600SemiBold, Inter_400Regular, Poppins_400Regular, Poppins_700Bold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }




    return (
        <View style={stayles.container}>
            <Text style={stayles.textName}>Nome: {name}</Text>
            <Text style={stayles.textAge}>Idade: {age}</Text>
        </View>
    );
}

const stayles = StyleSheet.create({
    container: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        paddingTop: 40,
        margin: 10,
        borderRadius: 5,
        width: 'auto',
        alignItems: 'center'
    },
    textAge: {
        fontFamily: 'Poppins_400Regular',
        color: 'orange',
        fontWeight: '700'
    },
    textName: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 18,
        color: 'black',
        fontWeight: '500'
    }
})

export default Person;