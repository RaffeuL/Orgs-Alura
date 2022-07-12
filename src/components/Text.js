import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function TextMont( { children, style } ) {
    let styleMont = styles.text;

    if(style?.fontWeight === 'bold'){
        styleMont = styles.textBold;
    }
    return <Text style={[style, styleMont]}> {children} </Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "MontSerratRegular",
        fontWeight: "normal",
    },
    textBold: {
        fontFamily: "MontSerratBold",
        fontWeight: "normal",
    }
})