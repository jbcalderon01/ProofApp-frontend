import React, { FC } from 'react'

import { ChildrenWrapper } from './styled'

export const Children:FC = ({ children }) => {
    return (
        <ChildrenWrapper>
            {children}
        </ChildrenWrapper>
    )
}
