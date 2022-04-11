import { useAuthContext } from '@app/contexts/auth.context';
import { useSnackbar } from 'notistack';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { RegisterComponent } from './register.component';
import { TRegisterDataForm } from './register.types';

export const RegisterContainer : FC = () => {

    // Context
    const { registerUser } = useAuthContext()

    // Hook
    const snack = useSnackbar()

    // Form
    const registerFormMethod = useForm<TRegisterDataForm>()

    /**
     * Handle submit login form
     * @param {object} dataForm data user a login
     * @returns {void}
     */
    const handleSubmit = (dataForm: TRegisterDataForm) => {
        if (dataForm.password === dataForm.confirmPassword) {
            registerUser(dataForm)
        } else {
            snack.enqueueSnackbar('Verificar campos', { variant: 'error' })
        }
    }

    return (
        <FormProvider {...registerFormMethod}>
            <RegisterComponent
                handleSubmit={handleSubmit}
            />
        </FormProvider>
    )
}
