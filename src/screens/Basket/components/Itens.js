import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import TextMont from '../../../components/Text';

export default function Itens({ title, list }) {
    return<>
        <TextMont style={styles.title}>{title}</TextMont>
        { list.map(({ name, image }) => {
            return <View key={name} style={styles.item}>   
                <Image source={image} style={styles.image}/>
                <TextMont style={styles.name}>{ name }</TextMont>
            </View>     
        }) }
    </>
}

const styles = StyleSheet.create({
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
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