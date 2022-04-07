import styled from 'styled-components'

export const Toggle = styled.div<{checked: boolean}>`
    display: flex;
    align-items: center;
    position: relative;
    justify-content:center;
    width: 16px;
    height: 16px;
    min-width: 14px;
    min-height: 14px;
    border-radius: 50%;
    border: 3px solid ${ ({ theme }) => theme.colors.primary };
    cursor: pointer;
    :before {
        content: '';
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        transition: .2s;
        background-color: ${ ({ theme, checked }) => checked && theme.colors.primary };
    }
`

