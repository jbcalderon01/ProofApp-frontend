import React, { FC, MouseEventHandler, useEffect, useState } from 'react'

import { ToggleWrapper } from './styled'
import { TToggle } from './types'

export const Toggle: FC<TToggle> = ({
    checked,
    name,
    value,
    onChange

}) => {
    // States
    const [isChecked, setIsChecked] = useState(false)

    const handleChange: MouseEventHandler<HTMLDivElement> = () => {
        setIsChecked(!isChecked)
        onChange&& onChange({
            name,
            value,
            checked: !isChecked
        })
    }

    useEffect(() => {
        setIsChecked(!!checked)
    }, [checked])

    return (
        <ToggleWrapper
            checked={isChecked}
            onClick={handleChange}
        />
    )
}
