import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardScreen } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const AppStack: FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='dashboard' component={DashboardScreen} />
        </Navigator>
    );
};

export default AppStack;
