import React from 'react';
import { Image, Text, StyleSheet, Dimensions, View } from 'react-native';

import TextMont from './components/Text';

import top from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Basket() {
    return <>
        <Image source={top}  style={styles.top} />
        <TextMont style={styles.title} >Basket details</TextMont>

        <View style={styles.basket}>
            <TextMont style={styles.name}>Vegetable Basket</TextMont>
            <View style={styles.farm}>
                <Image source={logo} style={styles.farmImage}/>
                <TextMont style={styles.farmName}>Jenny Jack Farm</TextMont>
            </View>
            <TextMont style={styles.description}>A basket with carefully selected products from farm to your kitchen</TextMont>
            <TextMont style={styles.price}>R$ 40,00 </TextMont>
        </View>
    </>  
}

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
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    name: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    farm: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    farmImage:{
        width: 32,
        height: 32,
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,

    },
    description: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    price: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
})