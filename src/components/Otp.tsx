import React, { FC } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Dimensions, StyleSheet, View } from 'react-native';
import Colors from '../constants/colors';

const { width } = Dimensions.get('screen');

interface Props {
    placeholder: string;
    onChangeCode: (code: string) => void;
}

const Otp: FC<Props> = ({ placeholder, onChangeCode }) => {
    // const [code, setCode] = useState(['', '', '', '', '', '']);
    // const handleInputChange = (text: string, index: number) => {
    //     const newCode = [...code];
    //     newCode[index] = text;
    //     setCode(newCode);
    //     props.onChangeCode(newCode.join(''));
    // };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeCode}
                keyboardType='numeric'
                maxLength={1}
            />
        </View>
    );
};

export default Otp;

const styles = StyleSheet.create({
    container: {
        width: width / 10,
        alignSelf: 'center',
        backgroundColor: Colors.input_background,
        borderRadius: 5,
        margin: 10,
    },
    input: {
        padding: 15,
        color: Colors.main_text,
    },
});
