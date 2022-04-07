import React, { FC, useEffect, useState } from 'react'

import { CircleCheck, RadioGroupLabel, RadioGroupWrapper, RadioLabel, RadioWrapper } from './styled'
import { TRadio, TRadioGroup } from './types'

export const Radio: FC<TRadio> = ({
    label,
    value,
    checked,
    name,
    onChange
}) => {
    // States
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = () => {
        onChange && onChange({
            checked: !isChecked,
            value,
            name
        })
    }

    useEffect(() => {
        setIsChecked(!!checked)
    }, [checked])

    return (
        <RadioWrapper onClick={handleChange} >
            <CircleCheck checked={isChecked}/>
            <RadioLabel>{label}</RadioLabel>
        </RadioWrapper>
    )
}

export const RadioGroup: FC<TRadioGroup> = ({ title, children }) =>{
    return (
        <div>
            <RadioGroupLabel>{title}</RadioGroupLabel>
            <RadioGroupWrapper>
                {children}
            </RadioGroupWrapper>
        </div>
    )
}
