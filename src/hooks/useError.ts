import { useEffect } from 'react';
import Toast from 'react-native-toast-message';

const useError = (error: string | null, errorHandler: () => void) => {
    useEffect(() => {
        if (error) {
            Toast.show({ type: 'error', text1: error });
            errorHandler();
        }

        // eslint-disable-next-line
    }, [error]);
};

export default useError;
