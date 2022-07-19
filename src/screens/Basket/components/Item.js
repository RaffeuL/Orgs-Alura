import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import TextMont from '../../../components/Text';

export default function Item({ item: { name, image } }) {

    return<View key={name} style={styles.item}>   
            <Image source={image} style={styles.image}/>
            <TextMont style={styles.name}>{ name }</TextMont>
        </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    image: {
        width: 46,
        height: 46,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    },
})