import styled from 'styled-components'

import { TSquareColor, TThemeCustomizerWrapper } from './types'

export const ThemeCustomizerWrapper = styled.div<TThemeCustomizerWrapper>`
    display:flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top:0;
    width: 400px;
    transition: .4s;
    right: ${ ({ open }) => open ? '0': '-400px' };
    height: 100%;
    background-color: ${ ({ theme }) => theme.interface.backgrounds.main };
    box-shadow: 0 15px 30px 0 rgb(34 41 47 / 11%), 0 5px 15px 0 rgb(34 41 47 / 8%);
`
export const Section = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
    padding: 1.5rem;
`
export const Divider = styled.div`
    width: 100%;
    height: 1px;
    margin: 10px 0px;
    background-color: ${ ({ theme }) => theme.text.variant };
`
export const SquareColor = styled.div<TSquareColor>`
    width: 31px;
    height: 31px;
    cursor: pointer;
    border: 2px solid ${ ({ theme, selected }) => selected ? theme.colors.primary : '' };
    background-color: ${ ({ bgColor }) => bgColor };
    color: ${ ({ bgColor }) => bgColor };
    border-radius: 4px;
`

export const OptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Option = styled.span`
    color: ${ ({ theme }) => theme.text.main };
`
export const ToggleThemeCustomizer = styled.div`
    position: absolute;
    display: flex;
    justify-content:center;
    align-items: center;
    width: 38px;
    height: 38px;
    box-shadow: -3px 0 8px rgb(34 41 47 / 10%);
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background-color: ${ ({ theme }) => theme.colors.primary };
    color: ${ ({ theme }) => theme.text.light };
    left: -2.4rem;
    bottom: 50%;
    cursor: pointer;
`
