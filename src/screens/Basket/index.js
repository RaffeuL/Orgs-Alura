import React from 'react';
import { View, StyleSheet } from 'react-native';

import Top from './components/Top';
import Details from './components/Details';



export default function Basket() {
    return <>
        <Top />
        
        <View style={styles.basket}>
            <Details /> 
        </View>
    </>  
}

const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})