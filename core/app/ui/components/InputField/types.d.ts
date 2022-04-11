import { UseFormRegisterReturn } from 'react-hook-form'

type Sizes = 'lg' | 'sm' | 'default'

export interface IInputField {
    inputSize?: Sizes
    labelSize?: Sizes
    typeMessage?: 'text' | 'tooltip'
    label?: string,
    helperText?: string
    error?: {message: string}
    placeholder?: string
    register?: UseFormRegisterReturn
    type?: 'text' | 'password'
}

// Styled

export type TInputWrapper = {
    tooltip: boolean
    error?: IInputField['error']
}
export type TInput = {
    size: Sizes
}
export type TInputLabel = {
    size: Sizes
}
