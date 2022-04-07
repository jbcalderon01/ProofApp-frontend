import styled from 'styled-components'

import { TToggleWrapper } from './types'

export const ToggleWrapper = styled.div<TToggleWrapper>`
    display: flex;
    align-items: center;
    width: 49px;
    height: 24px;
    border-radius: 1rem;
    position: relative;
    cursor: pointer;
    :after {
    transition: .2s;
        content: '';
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        box-shadow: -1px 2px 3px 0 rgb(34 41 47 / 20%);
        background-color: ${ ({ theme }) => theme.interface.backgrounds.main };
        right: ${ ({ checked }) => checked ? '5px': '28px' };
    };
    :before {
        content: '';
        transition: .2s;
        background-color: ${ ({ theme, checked }) => checked ? theme.colors.primary :theme.interface.backgrounds.darken };
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
    }
`
