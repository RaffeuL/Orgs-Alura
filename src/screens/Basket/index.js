import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Top from './components/Top';
import Details from './components/Details';
import Itens from './components/Itens';



export default function Basket({ top, details, itens }) {
    return <ScrollView>
        <Top {...top}/>
        
        <View style={styles.basket}>
            <Details  {...details}  /> 
            <Itens {...itens}/>
        </View>
    </ScrollView>  
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})