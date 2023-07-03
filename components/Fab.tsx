import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from '@rneui/themed';

// https://reactnativeelements.com/docs/components/fab

type FabProps = {
    onPress?: () => void;
};

const Fab: FC<FabProps> = ({onPress}) => {
    const [visible] = React.useState(true);

    return (
        <View style={styles.container}>
            <FAB visible={visible} icon={{ name: 'add', color: 'white' }} color="#252525" placement='right' onPress={onPress}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 5,
        flexGrow: 1,
    },
});
export default Fab;
