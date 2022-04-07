import React, { FC, useCallback } from 'react'

import { NavOption } from './components'
import { NavPopupWrapper } from './styled'
import { TNavPopup } from './types'

export const NavPopup: FC<TNavPopup> = ({ data, visible }) => {

    const createRecursiveComponent = useCallback((dataMenu: any) => {
        if (dataMenu?.menu?.length) {
            return (
                dataMenu?.menu?.map((x: any, i: number) => (
                    <NavOption key={`navOption${ i }`} data={x}>
                        {createRecursiveComponent(x)}
                    </NavOption>
                ))
            )
        } else {
            <NavOption data={dataMenu}/>
        }
    }, [])

    return (
        <NavPopupWrapper
            visible={!!visible}
        >
            {createRecursiveComponent(data)}
        </NavPopupWrapper>
    )
}
