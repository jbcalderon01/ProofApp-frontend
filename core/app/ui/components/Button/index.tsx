
import React, { FC } from 'react'

import { ButtonWrapper } from './styles'
import { IButton } from './types'

export const Button: FC<IButton> = ({
    children,
    color='primary',
    size = 'default',
    variant='filled',
    onClick,
    type
}) => {
    return (
        <ButtonWrapper
            color={color}
            size={size}
            type={type}
            variant={variant}
            onClick={onClick}
        >
            {children}
        </ButtonWrapper>
    )
}
