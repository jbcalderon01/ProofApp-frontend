import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { TArrowIcon, TOptionWrapper } from './types';

export const InputSearchWrapper = styled.div`
    color: ${ ({ theme }) => theme.text.main };
    position: relative;
`

export const Wrapper = styled.div`
    display: flex;
    position: relative;
`

export const Input = styled.input`
    border-radius: 0.357rem;
    outline: none;
    border: 1px solid;
    font-size: 1rem;
    width: 100%;
    color: ${ ({ theme }) => theme.text.variant };
    padding: 0.438rem 1rem;
    :focus {
        box-shadow: 0 3px 10px 0 rgb(34 41 47 / 10%);
        border: 1px solid ${ ({ theme }) => theme.colors.primary };
    }
`
export const ArrowIcon = styled(FontAwesomeIcon)<TArrowIcon>`
    position: absolute;
    right: 10px;
    top: 30%;
    bottom: 0;
    transition: .2s;
    ${ ({ active }) => active && 'transform: rotate(-90deg)' };
`

export const PopupWrapper = styled.div`
    position: absolute;
    top: 120%;
    width: 100%;
    box-shadow: 0 4px 25px 0 rgb(0 0 0 / 10%);
    border-radius: 0.357rem;
`
export const OptionWrapper = styled.div<TOptionWrapper>`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding: 0.438rem 1rem;
    color: ${ ({ theme }) => theme.text.variant };
    cursor: pointer;
    ${ ({ selected, theme }) => selected && `
        background-color: ${ theme.colors.primary };
        color: ${ theme.text.light };
    ` }
    :hover {
        color: ${ ({ theme, selected }) => !selected && theme.colors.primary };
        background-color: ${ ({ theme, selected }) => !selected && theme.interface.backgrounds.variant };
    }
`

export const OptionText = styled.p`
    margin: 0;
    font-size: 1em;

`

export const CheckIcon = styled(FontAwesomeIcon)`
    color: ${ ({ theme }) => theme.text.light };
`

