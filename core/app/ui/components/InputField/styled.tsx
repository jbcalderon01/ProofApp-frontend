import styled from 'styled-components'

import { TInput, TInputLabel, TInputWrapper } from './types'

const INPUT_SIZES = {
    lg: () => 'padding: 0.75rem 1.143rem',
    default: () => 'padding: 0.438rem 1rem',
    sm: () => 'padding: 0.188rem 0.857rem'
}

const LABEL_SIZES = {
    lg: () => 'font-size: 1.143rem',
    default: () => 'font-size: 14px',
    sm: () => 'font-size: .857rem',
}

export const InputWrapper = styled.div<TInputWrapper>`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    ${ ({ theme, tooltip, error }) => tooltip && `
    :before {
        position: absolute;
        width: max-content;
        content: '${ error?.message }';
        background-color: ${ theme.colors.danger };
        top: calc(100% + 1px);
        color: ${ theme.text.light };
        font-size: .857rem;
        border-radius: 0.358rem;
        padding: 0.4rem 0.775rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    ` }
`

export const Input = styled.input<any>`
    border-radius: 0.357rem;
    outline: none;
    border: 1px solid;
    font-size: 1rem;
    color: ${ ({ theme }) => theme.text.main };
    ${ ({ size }: TInput) => INPUT_SIZES[size] };
    ${ ({ error, theme }) => error && `border: 1px solid ${ theme.colors.danger }` };
    :focus {
        border: 1px solid ${ ({ theme }) => theme.colors.primary };
    }
`

export const InputLabelWrapper = styled.div`
    color: ${ ({ theme }) => theme.text.main };
`
export const InputLabel = styled.label<TInputLabel>`
    ${ ({ size }) => LABEL_SIZES[size] };
`

export const InputHelperText = styled.span`
    color: ${ ({ theme }) => theme.text.variant };
`

export const InputValidationText = styled.div`
    color: ${ ({ theme }) => theme.colors.danger };
    font-size: .857rem;
`
export const InputValidationTooltip = styled.div`

`

