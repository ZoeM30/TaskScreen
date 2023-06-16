import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DashboardScreen } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const AppStack: FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='home' component={HomeScreen} />
            <Screen name='dashboard' component={DashboardScreen} />
        </Navigator>
    );
};

export default AppStack;
