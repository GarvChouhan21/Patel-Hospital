import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ButtonComponent = ({text, color, bgColor}:any) => {
    return(
            <TouchableOpacity style={[styles.btn, { backgroundColor: bgColor }]}>
            <Text style={[styles.txt,{ color: color }]}>{text}</Text>
            </TouchableOpacity>
    );
};

export default ButtonComponent;

const styles = StyleSheet.create({
    btn : {
        height : 40,
        width : '40%',
        borderRadius : 7,
        justifyContent:'center',
        alignItems : 'center'
    },
    txt : {
        fontWeight : 'bold'
    }
})