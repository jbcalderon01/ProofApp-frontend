import React, { FC } from 'react'

import { NavItem } from './components'
import { NavBarHorizontalWrapper } from './styled'

const DATA_MENU_EXAMPLE = [
    {
        section: 'APP & PAGES',
        menu: [
            {
                name: 'Clientes',
                icon: 'user',
                path: '/clients'
            },
            {
                name: 'Compañías',
                icon: 'building',
                path: '/companies'
            }
        ]
    },
]

export const NavBarHorizontal: FC = () => {
    return (
        <NavBarHorizontalWrapper>
            {DATA_MENU_EXAMPLE?.map((x, i) => (
                <NavItem
                    key={`${ i }`}
                    data={x}
                />
            ))}
            {/* {DATA_MENU_EXAMPLE?.map((x, i) => (
                x.menu.map((xx, ii) => (
                    <NavItem
                        key={`${ i }${ ii }`}
                        data={xx}
                    />
                ))
            ))} */}
        </NavBarHorizontalWrapper>
    )
}
