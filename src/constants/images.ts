/* eslint-disable  global-require */
import { ImageURISource } from 'react-native';

interface ImageData {
    link: ImageURISource;
}

export const google: ImageData = {
    link: require('../../assets/google_black.png'),
};

export const logo: ImageData = {
    link: require('../../assets/logo.png'),
};
