import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Top from './components/Top';
import Details from './components/Details';
import Item from './components/Item';
import TextMont from '../../components/Text';



export default function Basket({ top, details, itens }) {
    return <>
        <FlatList 
            data={itens.list}
            renderItem={Item}
            keyExtractor={({ name }) => name}
            ListHeaderComponent={() => {
                return <>
                    <Top {...top}/>
            
                    <View style={styles.basket}>
                        <Details  {...details}  /> 
                        <TextMont style={styles.title}>{ itens.title }</TextMont>
                    </View>
                </>
            }}
        />   
    </>  
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    title: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
})