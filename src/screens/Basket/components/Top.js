import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import TextMont from '../../../components/Text';

import top from '../../../../assets/topo.png';

export default function Top() {
    return <>
        <Image source={top}  style={styles.top} />
        <TextMont style={styles.title} >Basket details</TextMont>
    </>
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    top: {
        width: "100%",
        height: 578 / 768 * width,
    },
    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },

})