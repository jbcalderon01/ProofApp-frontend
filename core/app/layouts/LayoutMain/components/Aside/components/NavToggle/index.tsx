import React, { FC } from 'react'

import { Toggle } from './styled'
import { TNavToggle } from './types'

export const NavToggle: FC<TNavToggle> = ({
    checked,
    onClick
}) => {
    return (
        <div
            onClick={onClick}
        >
            <Toggle checked={!!checked}/>
        </div>
    )
}
