import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = (props) => {
    return <RNTextInput {...props} style={[styles.input, props.style]} />;
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingTop: 8,
        width: '100%',
    },
});

export default TextInput;