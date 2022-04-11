import styled from 'styled-components';

import { TCircleCheck } from './types';

export const RadioWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const CircleCheck = styled.div<TCircleCheck>`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: .2s;
    background-color: ${ ({ theme, checked }) => checked && theme.colors.primary };
    border: 1px solid ${ ({ theme, checked }) => checked ? theme.colors.primary:theme.text.variant };
`

export const RadioLabel = styled.label`
    font-size: 1rem;
    margin-top: 2px;
    color: ${ ({ theme }) => theme.text.main };
`

export const RadioGroupWrapper = styled.div`
    display: flex;
    gap: 10px;
    padding: 5px 0;
`

export const RadioGroupLabel = styled.label`
    font-size: 1em;
    color: ${ ({ theme }) => theme.text.main };
`
