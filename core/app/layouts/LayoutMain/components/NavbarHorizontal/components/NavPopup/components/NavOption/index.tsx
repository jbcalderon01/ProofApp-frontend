import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import { NavPopupText } from '../../styled'

import { NavFloatMenu, NavOptionTextWrapper, NavOptionWrapper } from './styled'
import { TNavOption } from './types'

export const NavOption: FC<TNavOption> = ({ children, data }) => {

    const [isOpen, setIsOpen] = useState(false)
    // Hooks
    const router = useRouter()

    useEffect(() => {
        if (router.pathname === data?.path) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [router.pathname])

    return (
        <NavOptionWrapper

        >
            <NavOptionTextWrapper
                isOpen={isOpen}
                onClick={() => router.push(data?.path)}
            >
                <Link passHref href="/">
                    <NavPopupText
                        as={children ? 'span' : 'a'}
                        href={data?.path}
                        isOpen={isOpen}
                    >
                        {data?.name}
                    </NavPopupText>
                </Link>
                {children && (
                    <FontAwesomeIcon icon="angle-right" />
                )}
            </NavOptionTextWrapper>
            { (children && isOpen) && <NavFloatMenu >
                {children}
            </NavFloatMenu> }
        </NavOptionWrapper>
    )
}
