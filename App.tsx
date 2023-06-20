import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import { RootStackParamList } from './src/types';
import {
    DashboardScreen,
    ForgotPasswordScreen,
    LoginScreen,
    ResetPasswordScreen,
    RegisterScreen,
    SplashScreen,
    VerifyEmailScreen,
} from './src/screens';
import { AuthProvider } from './src/contexts/AuthContext';
import { navigationRef } from './src/constants';

const Stack = createStackNavigator<RootStackParamList>();

const App: FC = () => {
    return (
        <>
            <NavigationContainer ref={navigationRef}>
                <AuthProvider>
                    <Stack.Navigator>
                        <Stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
                        <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
                        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                        <Stack.Screen name='Forgot' component={ForgotPasswordScreen} options={{ headerShown: false }} />
                        <Stack.Screen name='Reset' component={ResetPasswordScreen} options={{ headerShown: false }} />
                        <Stack.Screen name='Verify' component={VerifyEmailScreen} options={{ headerShown: false }} />
                        <Stack.Screen name='Dashboard' component={DashboardScreen} options={{ headerShown: false }} />

                        {/* Add other screens here */}
                    </Stack.Navigator>
                </AuthProvider>
            </NavigationContainer>
            <Toast />
        </>
    );
};

export default App;
