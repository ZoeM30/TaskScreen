import { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();

const useGoogleAuth = () => {
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        androidClientId: Constants.expoConfig?.extra?.androidClientId,
        expoClientId: Constants.expoConfig?.extra?.expoClientId,
    });

    const [token, setToken] = useState<string>('');

    useEffect(() => {
        if (response?.type === 'success') {
            setToken(response.params?.id_token || '');
        }
    }, [response]);

    return { promptAsync, token, request };
};

export default useGoogleAuth;
