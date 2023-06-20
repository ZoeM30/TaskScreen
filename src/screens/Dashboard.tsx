import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../hooks';
import { Button } from '../components';

const Dashboard: FC = () => {
    const { auth, logout } = useAuth();

    const { user } = auth;

    return (
        <View style={styles.container}>
            <Text>Hello, {user?.email}</Text>
            <Button title='Logout' onPress={logout} />
        </View>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
