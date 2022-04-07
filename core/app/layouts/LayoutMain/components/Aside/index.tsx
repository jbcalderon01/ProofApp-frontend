import React, { FC, Fragment } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';

import { useLayout } from '../../layoutMain.context';

import { NavItem, NavToggle } from './components'
import { AsideContainer, AsideWrapper, Divider, NavBarHeader, NavItemsWrapper, NavLogo } from './styled'

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

export const AsideComponent:FC = () => {

    const {
        isOpenAside,
        isAnchorAside,
        setAnchorAside,
        setOpenAside,
        isHiddenAside
    } = useLayout()

    return (
        <AsideContainer
            isAnchorAside={isAnchorAside}
            isOpenAside={isOpenAside}
        >
            <AsideWrapper
                isAnchorAside={isAnchorAside}
                isHiddenAside={isHiddenAside}
                isOpenAside={isOpenAside}
                onMouseEnter={() => !isAnchorAside && setOpenAside(true)}
                onMouseLeave={() => !isAnchorAside && setOpenAside(false)}
            >
                <NavBarHeader>
                    <NavLogo>
                        <h2>Logo</h2>
                    </NavLogo>
                    { isOpenAside && <NavToggle
                        checked={isAnchorAside}
                        onClick={() => setAnchorAside(prev => !prev)}
                    />}
                </NavBarHeader>
                <Scrollbars autoHide universal style={{ height: 'calc(100vh - 106px)' }}>
                    <NavItemsWrapper>
                        <NavItem
                            data={{
                                name: 'Dashboard',
                                icon: 'house',
                                path: '/'
                            }}
                            isOpenAside={isOpenAside}
                        />
                        {DATA_MENU_EXAMPLE.map((x, i) => (
                            <Fragment
                                key={`navItem${ i }`}

                            >
                                {isOpenAside && <Divider>{x?.section}</Divider>}
                                {x?.menu?.map((xx, ii) => (
                                    <NavItem
                                        key={`navItem${ i }${ ii }`}
                                        data={xx as any}
                                        isOpenAside={isOpenAside}
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </NavItemsWrapper>
                </Scrollbars>
            </AsideWrapper>
        </AsideContainer>
    )
}
