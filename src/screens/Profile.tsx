import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { AuthRoutes, Routes } from '../constants';
import Avatars from '../components/Avatars';
import ProfileOption from '../components/ProfileOption';

export type ProfileScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, Routes.Profile>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Avatars />
                <Text style={styles.text}>Want to set your name?</Text>
            </View>
            <View style={styles.optionsContainer}>
                <ProfileOption
                    title='Profile'
                    icon={require('../../assets/usericon.png')}
                    onPress={() => navigation.navigate(Routes.EditProfile)}
                />
                <ProfileOption
                    title='Change Password'
                    icon={require('../../assets/keyicon.png')}
                    onPress={() => navigation.navigate(AuthRoutes.ChangePassword)}
                />
                <ProfileOption
                    title='Log Out'
                    icon={require('../../assets/logouticon.png')}
                    onPress={() => navigation.navigate(AuthRoutes.Login)}
                />
            </View>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileContainer: {
        width: 400,
        position: 'absolute',
    },
    text: {
        alignSelf: 'stretch',
        fontSize: 22,
        letterSpacing: -1,
        lineHeight: 40,
        textAlign: 'left',
        color: '#212529',
        fontFamily: 'Inter_medium',
        fontWeight: '500',
    },
    optionsContainer: {
        top: 323,
        left: 66,
        width: 205,
        position: 'absolute',
    },
    small_text: {
        marginBottom: 10,
        fontSize: 16,
    },
    verification_container: {
        flexDirection: 'row',
    },
});
