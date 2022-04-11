import React, { FC } from 'react'

import { Input, InputHelperText, InputLabel, InputLabelWrapper, InputValidationText, InputWrapper } from './styled'
import { IInputField } from './types'

export const InputField: FC<IInputField> = ({
    inputSize = 'default',
    labelSize = 'default',
    typeMessage = 'text',
    error,
    label,
    type,
    helperText,
    placeholder,
    register
}) => {
    return (
        <InputWrapper error={error} tooltip={typeMessage === 'tooltip'}>
            <InputLabelWrapper>
                <InputLabel
                    size={labelSize}
                >
                    {label}:
                </InputLabel>
                {helperText && <InputHelperText> {helperText}</InputHelperText>}
            </InputLabelWrapper>
            <Input
                error={!!error}
                placeholder={placeholder}
                size={inputSize}
                type={type}
                {...register}
            />
            { (typeMessage === 'text' && error) && <InputValidationText>
                {error.message}
            </InputValidationText>}
        </InputWrapper>
    )
}
