import { FC } from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@app/ui/components/GlobalComponent'

import { AutorInfo, Container, ImageWrapper } from './auth.styled'
import { LoginContainer } from './login/Login.container'
import { RegisterContainer } from './register/register.container'

const AuthViews = {
    login: <LoginContainer/>,
    register: <RegisterContainer/>
}

export const AuthContainer: FC = () => {

    // Hooks
    const type = useRouter().query.type as keyof typeof AuthViews

    return (
        <Container>
            <ImageWrapper>

                <img
                    src="login-image.png"
                    style={{ objectFit: 'contain', position: 'absolute', width: '100%' }}
                />
            </ImageWrapper>
            {AuthViews[type]}
            <AutorInfo>
                <Typography>
                © Create by Johnny Bernal Based in Vuexy Template
                </Typography>
            </AutorInfo>
        </Container>
    )
}
