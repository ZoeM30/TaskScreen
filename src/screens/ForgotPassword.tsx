import React, { FC } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { Input, Button } from '../components';
import { RootStackParamList } from '../types';
import Colors from '../constants/colors';
import { AuthRoutes } from '../constants';

const { width } = Dimensions.get('screen');

type ForgotPasswordScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, AuthRoutes.Forgot>;
};

const ForgotPasswordScreen: FC<ForgotPasswordScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.small_text}>Don't worry, enter your email and we'll send you a verification code.</Text>
            <Input name='email' placeholder='Email' />

            <Pressable onPress={() => navigation.navigate('Verify')}>
                <Button title='Send' onPress={() => navigation.navigate(AuthRoutes.Verify)} />
            </Pressable>

            <View style={styles.link}>
                <TouchableOpacity onPress={() => navigation.navigate(AuthRoutes.Login)}>
                    <Text style={styles.link_text}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(AuthRoutes.Register)}>
                    <Text style={styles.link_text}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ForgotPasswordScreen;
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
    small_text: {
        marginBottom: 10,
        fontSize: 16,
    },
});
