import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <TouchableOpacity style={styles.buttonCadastro} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.buttonTextCadastro}>IR PARA CADASTRO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonConsulta} onPress={() => navigation.navigate('Consulta')}>
                <Text style={styles.buttonTextConsulta}>IR PARA CONSULTA</Text>
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    buttonCadastro: {
        backgroundColor: '#8a2be2', // Troque aqui pela cor desejada
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '60%',
        alignItems: 'center',
      },
      buttonTextCadastro: {
        color: '#FFFFFF',
        fontWeight: 'bold', // Cor do texto do botão
        fontSize: 20,
      },

      buttonConsulta: {
        backgroundColor: '#00ced1', // Troque aqui pela cor desejada
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '60%',
        alignItems: 'center',
      },
      buttonTextConsulta: {
        color: '#FFFFFF',
        fontWeight: 'bold', // Cor do texto do botão
        fontSize: 20,
      }
  });