const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Homepage from "./screens/Homepage";
import Setting from "./screens/Setting";
import ChangePassword1 from "./screens/ChangePassword1";
import ChangePassword2 from "./screens/ChangePassword2";
import EditProfile from "./screens/EditProfile";
import AddPhoto from "./screens/AddPhoto";
import EditProfile2 from "./screens/EditProfile2";
import EditProfile3 from "./screens/EditProfile3";
import EditProfile4 from "./screens/EditProfile4";
import Setting1 from "./screens/Setting1";
import Page from "./screens/Page";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "SF Pro Text_regular": require("./assets/fonts/SF_Pro_Text_regular.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Page"
              component={Page}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Setting"
              component={Setting}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword1"
              component={ChangePassword1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChangePassword2"
              component={ChangePassword2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddPhoto"
              component={AddPhoto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile2"
              component={EditProfile2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile3"
              component={EditProfile3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile4"
              component={EditProfile4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Setting1"
              component={Setting1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
