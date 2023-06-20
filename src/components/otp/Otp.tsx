import React, { FC } from 'react';
import { Animated } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';

import styles, { ACTIVE_CELL_BG_COLOR, CELL_BORDER_RADIUS, CELL_SIZE, DEFAULT_CELL_BG_COLOR } from './styles';
import { OTP_LENGTH } from '../../constants';

interface IAnimateCell {
    index: number;
    isFocused: boolean;
}

interface ICell {
    index: number;
    symbol: string;
    isFocused: boolean;
}

interface IOtpProps {
    value: string;
    onChange: (value: string) => void;
}

const { Value, Text: AnimatedText } = Animated;

const animationsColor = [...new Array(OTP_LENGTH)].map(() => new Value(0));
const animationsScale = [...new Array(OTP_LENGTH)].map(() => new Value(1));
const animateCell = ({ index, isFocused }: IAnimateCell) => {
    Animated.parallel([
        Animated.timing(animationsColor[index], {
            useNativeDriver: false,
            toValue: isFocused ? 1 : 0,
            duration: 250,
        }),
        Animated.spring(animationsScale[index], {
            useNativeDriver: false,
            toValue: 1,
        }),
    ]).start();
};

const Otp: FC<IOtpProps> = ({ onChange, value }) => {
    const ref = useBlurOnFulfill({ value, cellCount: OTP_LENGTH });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue: onChange,
    });

    const renderCell = ({ index, symbol, isFocused }: ICell) => {
        const animatedCellStyle = {
            backgroundColor: animationsColor[index].interpolate({
                inputRange: [0, 1],
                outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
            }),
            borderRadius: animationsScale[index].interpolate({
                inputRange: [0, 1],
                outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
            }),
            transform: [
                {
                    scale: animationsScale[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.2, 1],
                    }),
                },
            ],
        };

        // Run animation on next event loop tik
        // Because we need first return new style prop and then animate this value
        setTimeout(() => {
            animateCell({ index, isFocused });
        }, 0);

        return (
            <AnimatedText key={index} style={[styles.cell, animatedCellStyle]} onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
            </AnimatedText>
        );
    };

    return (
        <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={onChange}
            cellCount={OTP_LENGTH}
            rootStyle={styles.codeFiledRoot}
            keyboardType='number-pad'
            textContentType='oneTimeCode'
            renderCell={renderCell}
        />
    );
};

export default Otp;
