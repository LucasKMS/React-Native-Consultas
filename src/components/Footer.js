import React from "react";
import {Text, View, StyleSheet, Image } from "react-native";
import FatecVotorantim from '../../assets/fatec.png';
 
export default function Footer() {
  return (
    <View style={styles.container}>
        <Image
        source={{ FatecVotorantim }}
        style={styles.img}
        />
        <View style={styles.desenvolvido}>
            <Text style={styles.desenvolvidoTexto}> Desenvolvido por LucasKMS 🤠</Text>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        maxHeight: 80,
        height: 80,
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    desenvolvido: {
        margin: 20,
    },
    desenvolvidoTexto: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    img: {
        width: "10%",
        height: "10%",
    }
});