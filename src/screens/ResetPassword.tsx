import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { Input, Button } from '../components';
import { RootStackParamList } from '../types';
import Colors from '../constants/colors';

const { width } = Dimensions.get('screen');

type ResetPasswordScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Reset'>;
};

const ResetPasswordScreen: FC<ResetPasswordScreenProps> = ({ navigation }) => {
    // const [email, setEmail] = useState<string | null>(null);
    const [Password, setPassword] = useState<string>('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Reset Password</Text>
            <Input placeholder='New Password' onChangeText={(text) => setPassword(text)} />
            <Input placeholder='Confirm Password' secureTextEntry onChangeText={(text) => setPassword(text)} />

            <Button title='Reset' onPress={() => alert(`Pressed`)} />
            <View style={styles.link}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.link_text}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.link_text}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    link_text: {
        textDecorationLine: 'underline',
        color: Colors.main_text,
        fontSize: 14,
        marginHorizontal: width / 10,
    },
    title: {
        fontSize: 32,
        marginBottom: 10,
    },
});
