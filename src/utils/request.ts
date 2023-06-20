/* eslint-disable @typescript-eslint/no-explicit-any */
import { headers } from '../constants';
import { setSession } from './axios';
import { FetchResponse, RequestMethod, RequestConfig, RequestBody } from '../types';

export const makeRequest = async (
    endpoint: string,
    method: RequestMethod,
    data?: RequestBody,
): Promise<FetchResponse> => {
    try {
        const config: RequestConfig = {
            method,
            headers,
        };

        if (data) config.body = JSON.stringify(data);

        const response = await fetch(`https://zenitha-staging.fly.dev/${endpoint}`, config);

        const result = await response.json();

        if (!response.ok) {
            await setSession();
            // push to log in immediately when not auth path, token is not valid

            return { response, result, error: true };
        }

        return { response, result, error: false };
    } catch (err) {
        const response = {} as any;
        const result = {} as any;
        return { error: true, response, result };
    }
};
