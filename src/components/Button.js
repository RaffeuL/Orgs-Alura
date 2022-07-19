import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import TextMont from './Text';

export default function Button({ text, onPress, style }){
    return<> 
        <TouchableOpacity style={[styles.button, style]} onPress={ onPress }>
            <TextMont style={[styles.textButton, style]}>{ text }</TextMont>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textButton: {
        textAlign: "center",
        color: "#FFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
})