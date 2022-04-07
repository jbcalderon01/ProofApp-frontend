import { Button, InputField } from '@app/ui/components';
import { Typography } from '@app/ui/components/GlobalComponent';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { FieldsWrapper, Form, InfoWrapper, RegisterWrapper } from './register.styled';
import { IRegisterComponent, TRegisterDataForm } from './register.types';

export const RegisterComponent : FC<IRegisterComponent> = ({
    handleSubmit
}) => {

    // Hook
    const router = useRouter()

    // Form
    const { register, handleSubmit: onSubmit } = useFormContext<TRegisterDataForm>()

    return (
        <RegisterWrapper>
            <Form onSubmit={onSubmit(handleSubmit)}>
                <InfoWrapper>
                    <Typography size="1x">
                        Bienvenido a ProofAPP!
                    </Typography>
                    <Typography size="sm">
                        Crea tu cuenta y comienza la aventura.
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
                    <InputField
                        label="Confirmar Contraseña"
                        register={register('confirmPassword')}
                        type="password"
                    />
                    <Button
                        size="small"
                        type="submit"
                        onClick={() => router.push('/auth?type=register')}
                    >
                        Crear cuenta
                    </Button>
                    <Button
                        color="danger"
                        size="small"
                        type="button"
                        onClick={() => router.push('/auth?type=login')}
                    >
                        Volver
                    </Button>
                </FieldsWrapper>
            </Form>
        </RegisterWrapper>
    )
}
