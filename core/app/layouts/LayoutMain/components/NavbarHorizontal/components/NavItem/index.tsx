import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import { NavPopup } from '../NavPopup'

import { NavArrowIcon, NavItemButton, NavItemIcon, NavItemText, NavItemWrapper } from './styled'
import { TNavItem } from './types'

export const NavItem: FC<TNavItem> = ({ data }) => {

    // States
    const [isActive, setIsActive] = useState(false)

    return (
        <NavItemWrapper >
            <NavItemButton
                active={isActive}
                onClick={() => setIsActive(!isActive)}
            >
                <NavItemIcon icon={data?.icon} />
                <NavItemText >{data?.section}</NavItemText>
                <NavArrowIcon icon="angle-down" />

            </NavItemButton>
            <NavPopup
                data={data}
                visible={isActive}
            />
        </NavItemWrapper>
    )
}
