
import Image from 'next/image'
import styled from 'styled-components'

import { TAvatarWrapper } from './types'

const AVATAR_SIZES = {
    sm: () => `
        width: 21px;
        height: 21px;
    `,
    md: () => `
        width: 35px;
        height: 35px;
    `,
    lg: () => `
        width: 49px;
        height: 49px;
    `,
    '1x': () => `
        width: 79px;
        height: 79px;
    `

}

export const AvatarWrapper = styled.div<TAvatarWrapper>`
    display: flex;
    justify-content: center;
    align-items: center;
    ${ ({ size }) => AVATAR_SIZES[size] };
    border-radius: 50%;
    background-color: ${ ({ theme, color }) => theme.colors[color] };
    color: ${ ({ theme }) => theme.text.light };
`

export const InitialText = styled.div`
    font-size: 80%;
`
