import React, { FC} from 'react';
import { View,StyleSheet } from 'react-native';
import { Avatar } from '@rneui/themed';

type AvatarData = {
image_url: string;
};
type AvatarComponentProps = {};

const Avatars: FC<AvatarComponentProps> = () => {
    return (
    <View>
        <Avatar
          size={64}
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
          title="Bj"
          containerStyle={{ backgroundColor: 'grey' }}
        >
          {/* add navigation here */}
          <Avatar.Accessory size={23} onPress={() => console.log('Pressed')} />
        </Avatar>
        </View>)}

export default Avatars;