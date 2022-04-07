import React, { FC } from 'react'

import { AvatarWrapper, InitialText } from './styled'
import { TAvatar } from './types'

export const Avatar: FC<TAvatar> = ({
    color = 'primary',
    size = 'md',
}) => {
    return (
        <AvatarWrapper
            color={color}
            size={size}
        >
            <InitialText>VX</InitialText>
        </AvatarWrapper>
    )
}
