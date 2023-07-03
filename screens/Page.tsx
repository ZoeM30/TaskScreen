import { View,StyleSheet} from 'react-native';
import React, { FC } from 'react';
import Fab from '../components/Fab';
import { useNavigation } from "@react-navigation/native";
import { IconButton} from 'react-native-paper';

const Page = () => {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.menu} >
            <IconButton
    icon="menu"
    iconColor="#252525"
    size={50}
    onPress={() => navigation.navigate("Setting1")}
  />
            </View>
            <Fab />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
  menu:{
    paddingTop:30,
  }
});
export default Page;



