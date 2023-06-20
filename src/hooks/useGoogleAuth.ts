import { useState } from 'react';
import Constants from 'expo-constants';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const useGoogleAuth = () => {
    GoogleSignin.configure({
        webClientId: Constants.manifest?.extra?.webClientId,
    });

    const [token, setToken] = useState<string>('');
    const onGoogleButtonPress = async () => {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const result = await auth().signInWithCredential(googleCredential);

        const authToken = await result.user.getIdToken();
        console.log(authToken);

        setToken(authToken);
    };

    return { onGoogleButtonPress, token };
};

export default useGoogleAuth;
