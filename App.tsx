import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types';
import {
    ForgotPasswordScreen,
    HomeScreen,
    LoginScreen,
    ResetPasswordScreen,
    SignUpScreen,
    SplashScreen,
    VerifyEmailScreen,
} from './src/screens';

const Stack = createStackNavigator<RootStackParamList>();

const App: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />

                <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Forgot' component={ForgotPasswordScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Reset' component={ResetPasswordScreen} options={{ headerShown: false }} />
                <Stack.Screen name='Verify' component={VerifyEmailScreen} options={{ headerShown: false }} />

                {/* Add other screens here */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
