import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import { THeaderWrapper } from './types'

export const HeaderWrapper = styled.div<THeaderWrapper>`
    grid-area: header;
    display:flex;
    justify-content: space-between;
    padding: 20px 30px;
    transition: .2s;
    background-color: ${ ({ theme }) => theme.interface.backgrounds.main };
    box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%);
    margin: 1.3rem 0;
    color: ${ ({ theme }) => theme.text.main };
    border-radius: 6px;
    ${ ({ theme, navBarColor }) => navBarColor && `
        background-color: ${ navBarColor };
        color: ${ theme.text.light };
    ` }

`

export const Icon = styled(FontAwesomeIcon)`
    cursor: pointer;
`

export const IconsWrapper = styled.div`
    display: flex;
    align-items:center;
    gap: 1.5em;
`
export const AvatarInfo = styled.div`
    display: flex;
    align-items: center;
    text-align: end;
    gap: 10px;
    font-size: 14px;
    cursor: pointer;

`
export const AvatarWrapper = styled.div`
    display: flex;
    align-items: center;
    text-align: end;
    gap: 10px;
    font-size: 14px;
    cursor: pointer;
`

export const UserName = styled.p`
    margin: 0;
    font-weight: 600;
`

export const UserRole = styled.span`
`
