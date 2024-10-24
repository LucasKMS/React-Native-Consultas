import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ConsultaScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'flex-start', marginTop: 30}}>
          <Text style={{fontWeight: 'bold', fontSize: 24, textAlign: 'center'}}>Consultas de Usuário</Text>
            <TouchableOpacity style={styles.buttonConsulta}>
                <Text style={styles.buttonTextConsulta}>CONSULTAR</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    buttonConsulta: {
      backgroundColor: '#00ced1', // Troque aqui pela cor desejada
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
      alignItems: 'center',
    },
    buttonTextConsulta: {
      color: '#FFFFFF',
      fontWeight: 'bold', // Cor do texto do botão
      fontSize: 20,
    }
});