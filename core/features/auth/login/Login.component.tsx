import { Button, InputField } from '@app/ui/components';
import { Typography } from '@app/ui/components/GlobalComponent';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { FieldsWrapper, Form, InfoWrapper, LoginWrapper } from './Login.styled';
import { ILoginComponent, TLoginDataForm } from './Login.types';

export const LoginComponent : FC<ILoginComponent> = ({
    handleSubmit
}) => {

    // Hook
    const router = useRouter()

    // Form
    const { register, handleSubmit: onSubmit } = useFormContext<TLoginDataForm>()

    return (
        <LoginWrapper>
            <Form onSubmit={onSubmit(handleSubmit)}>
                <InfoWrapper>
                    <Typography size="1x">
                    Bienvenido a ProofAPP!
                    </Typography>
                    <Typography size="sm">
                    Inicia sesión en tu cuenta y comienza la aventura.
                    </Typography>
                </InfoWrapper>
                <FieldsWrapper>
                    <InputField
                        label="Correo electrónico"
                        register={register('email')}
                    />
                    <InputField
                        label="Contraseña"
                        register={register('password')}
                        type="password"
                    />
                    <Button
                        size="small"
                        type="submit"
                    >
                        Iniciar sesión
                    </Button>
                    <Button
                        color="danger"
                        size="small"
                        type="button"
                        onClick={() => router.push('/auth?type=register')}
                    >
                        Crear cuenta
                    </Button>
                </FieldsWrapper>
            </Form>
        </LoginWrapper>
    )
}
