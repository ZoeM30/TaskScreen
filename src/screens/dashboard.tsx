import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native'
const App: FunctionComponent = () => {
    return (
        <View style={styles.container}>
            <Text>dashboard</Text>
        </View>
    )
}

export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
})