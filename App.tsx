const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ViewAllTasks from "./screens/ViewAllTasks";
import CreateFutureTask from "./screens/CreateFutureTask";
import ViewTasksSelectDate from "./screens/ViewTasksSelectDate";
import CreateCurrentTask from "./screens/CreateCurrentTask";
import CreateTaskDiscard from "./screens/CreateTaskDiscard";
import ConfirmDeletecompleteTask from "./screens/ConfirmDeletecompleteTask";
import ConfirmDeleteTask from "./screens/ConfirmDeleteTask";
import DeleteTask from "./screens/DeleteTask";
import ViewTasks from "./screens/ViewTasks";
import ViewCurrentTaskDetail from "./screens/ViewCurrentTaskDetail";
import EditTask from "./screens/EditTask";
import AddCategory from "./screens/AddCategory";
import EditCategorySuccess from "./screens/EditCategorySuccess";
import ViewFutureTaskDetail from "./screens/ViewFutureTaskDetail";
import EditTask1 from "./screens/EditTask1";
import EditTaskDescription from "./screens/EditTaskDescription";
import ViewTasks1 from "./screens/ViewTasks1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Inter_light: require("./assets/fonts/Inter_light.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
    Poppins_light: require("./assets/fonts/Poppins_light.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    "SF Pro Text_regular": require("./assets/fonts/SF_Pro_Text_regular.ttf"),
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
              name="ViewAllTasks"
              component={ViewAllTasks}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateFutureTask"
              component={CreateFutureTask}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewTasksSelectDate"
              component={ViewTasksSelectDate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateCurrentTask"
              component={CreateCurrentTask}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateTaskDiscard"
              component={CreateTaskDiscard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmDeletecompleteTask"
              component={ConfirmDeletecompleteTask}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmDeleteTask"
              component={ConfirmDeleteTask}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeleteTask"
              component={DeleteTask}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewTasks"
              component={ViewTasks}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewCurrentTaskDetail"
              component={ViewCurrentTaskDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditTask"
              component={EditTask}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddCategory"
              component={AddCategory}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditCategorySuccess"
              component={EditCategorySuccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewFutureTaskDetail"
              component={ViewFutureTaskDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditTask1"
              component={EditTask1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditTaskDescription"
              component={EditTaskDescription}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ViewTasks1"
              component={ViewTasks1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
