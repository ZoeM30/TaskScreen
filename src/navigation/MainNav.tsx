import React, { FC, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const MainNav: FC = () => {
    const [user] = useState(null);

    return <NavigationContainer>{user !== null ? <AppStack /> : <AuthStack />}</NavigationContainer>;
};

export default MainNav;
