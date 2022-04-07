import { useAuthContext } from '@app/contexts/auth.context';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { LoginComponent } from './Login.component';
import { TLoginDataForm } from './Login.types';

export const LoginContainer : FC = () => {

    // Context
    const { signIn } = useAuthContext()

    // Form
    const loginFormMethod = useForm()

    /**
     * Handle submit login form
     * @param {object} dataForm data user a login
     * @returns {void}
     */
    const handleSubmit = (dataForm: TLoginDataForm) => {
        signIn(dataForm)
    }

    return (
        <FormProvider {...loginFormMethod}>
            <LoginComponent
                handleSubmit={handleSubmit}
            />
        </FormProvider>
    )
}
