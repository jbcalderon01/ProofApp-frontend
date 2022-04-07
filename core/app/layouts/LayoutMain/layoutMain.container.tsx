
import React, { FC } from 'react'

import { LayoutMainComponent } from './layoutMain.component'
import { LayoutProvider } from './layoutMain.context'

export const LayoutMainContainer:FC = ({ children }) => {

    return (
        <LayoutProvider>
            <LayoutMainComponent>
                {children}
            </LayoutMainComponent>
        </LayoutProvider>
    )
}
