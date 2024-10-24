import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function CadastroScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center'}}>Cadastro de Usuário</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    input: {
      height: 45,
      width: "60%",
      borderWidth: 1,
      borderColor: "#222",
      margin: 10,
      fontSize: 20,
      padding: 10,
    },
    button: {
        backgroundColor: '#8a2be2', // Troque aqui pela cor desejada
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '60%',
        alignItems: 'center',
      },
      buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold', // Cor do texto do botão
        fontSize: 20,
      }
  });