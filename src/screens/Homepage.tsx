import { View, Text,Pressable } from 'react-native'
import React, { FC } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import IconButtonComponent from '../components/IconButton';
import { Routes } from '../constants';
import Fab from '../components/Fab';

export type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList, 'Homepage'>;
};

const Homepage:FC<HomeScreenProps> = ({navigation}) => {
  return (
    <><View>
      <IconButtonComponent icon="menu" size={20} color={'#252525'} onPress={() => navigation.navigate(Routes.Profile)} />
    </View>
    
    <Fab /></>
  )
}

export default Homepage



