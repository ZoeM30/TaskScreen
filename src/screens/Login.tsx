import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { Input, Button, AltButton, HorizontalDivider } from '../components';
import { RootStackParamList } from '../types';
import Colors from '../constants/colors';

const { width } = Dimensions.get('screen');

type LoginScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};
const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Input placeholder='Email' onChangeText={(text) => setEmail(text)} />
            <Input placeholder='Password' secureTextEntry onChangeText={(text) => setPassword(text)} />
            <Button title='Login' onPress={() => alert(`Pressed`)} />
            {/* const login =async (params:type) => */}
            {/* <Button title="Login" onPress={login} /> */}
            <View style={styles.link}>
                <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                    <Text style={styles.link_text}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.link_text}>Sign up</Text>
                </TouchableOpacity>
            </View>
            <HorizontalDivider />
            <AltButton title='Continue with Google' onPress={() => alert(`Pressed`)} />
        </View>
    );
};

export default LoginScreen;

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
    title: {
        fontSize: 32,
        marginBottom: 10,
    },
    separator: {
        fontSize: 14,
        color: Colors.placeholder,
    },
    link_text: {
        textDecorationLine: 'underline',
        color: Colors.main_text,
        fontSize: 14,
        marginHorizontal: width / 10,
    },
});
