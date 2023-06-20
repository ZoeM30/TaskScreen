import { useEffect } from 'react';
import Toast from 'react-native-toast-message';

const useMessage = (message: string | null, messageHandler: () => void) => {
    useEffect(() => {
        if (message) {
            Toast.show({ type: 'success', text1: message });
            messageHandler();
        }

        // eslint-disable-next-line
    }, [message]);
};

export default useMessage;
