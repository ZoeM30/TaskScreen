/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

interface IFormProviderProps {
    children: React.ReactNode | React.ReactElement;
    methods: UseFormReturn<any>;
}

const FormProvider: FC<IFormProviderProps> = ({ children, methods }) => {
    return <Form {...methods}>{children}</Form>;
};

export default FormProvider;
