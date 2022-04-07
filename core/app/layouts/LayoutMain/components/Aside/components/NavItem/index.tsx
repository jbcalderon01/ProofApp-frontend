import { Collapse } from '@app/ui/components/Collapse'
import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { ArrowIcon, Icon, NavigationText, Navigation, NavItemWrapper, Notification, NavSubmenu } from './styled'
import { TNavItem } from './types'

export const NavItem: FC<TNavItem> = ({
    isOpenAside,
    data
}) => {

    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const isExistSubmenu = !!data?.submenu?.length

    useEffect(() => {
        if (router.pathname === data?.path) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [router.pathname])

    return (
        <NavItemWrapper
            active={isOpen}
            isExistSubmenu={isExistSubmenu}
            onClick={() => router.push(data?.path || '')}
        >
            <Navigation >
                <Icon
                    icon={data?.icon}
                    size="lg"
                />
                {isOpenAside && (
                    <>
                        <NavigationText>{data?.name}</NavigationText>
                        { data?.notification && <Notification>{data.notification}</Notification>}
                        { isExistSubmenu && (
                            <ArrowIcon
                                icon="angle-right"
                                open={isOpen}
                                size="sm"
                            />
                        )}
                    </>
                )}
            </Navigation>
            { isExistSubmenu && <Collapse open={isOpen}>
                {data?.submenu?.map((x:any, i:number) => (
                    <NavSubmenu key={`navSubmenu${ i }`}>
                        <Icon
                            icon="arrow-right"
                            size="xs"
                        />
                        { isOpenAside && <NavigationText>{x.name}</NavigationText> }
                    </NavSubmenu>
                ))}
            </Collapse>}
        </NavItemWrapper>
    )
}

