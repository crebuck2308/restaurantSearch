import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Feather 
                style={styles.iconStyle} 
                name='search' 
                />
            <TextInput
                style={styles.inputStyle} 
                placeholder='Search'
            />
        </View>
    );
};
const styles = StyleSheet.create ({
    background: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }

});
export default SearchBar;