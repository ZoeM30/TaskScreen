import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUpScreen, LoginScreen } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const AuthStack: FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='signup' component={SignUpScreen} />
            <Screen name='login' component={LoginScreen} />
        </Navigator>
    );
};

export default AuthStack;
