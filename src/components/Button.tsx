import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dimensions, StyleSheet, Text } from 'react-native';
import Colors from '../constants/colors';

const { height, width } = Dimensions.get('screen');

interface IButtonProps {
    title: string;
    onPress?: () => void;
}

const Button: FC<IButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.button_background,
        alignItems: 'center',
        width: width / 1.1,
        height: height / 15,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 18,
        borderRadius: 5,
        marginVertical: 20,
    },

    text: {
        color: Colors.button_text,
        fontSize: 18,
    },
});
