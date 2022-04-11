/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuthContext } from '@app/contexts/auth.context'
import { Popup } from '@app/ui/components'
import { Avatar } from '@app/ui/components/Avatar'
import { Typography } from '@app/ui/components/GlobalComponent'
import { faCalendar, faCircleCheck, faEnvelope, faMessage, faMoon, faStar, faSun } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useState } from 'react'
import { useTheme } from 'styled-components'

import { useLayout } from '../../layoutMain.context'

import { AvatarInfo, AvatarWrapper, HeaderWrapper, Icon, IconsWrapper, UserName, UserRole } from './styled'

export const HeaderComponent: FC = () => {

    // Context
    const { logout, currentUser } = useAuthContext()

    // Hooks
    const theme = useTheme()
    const { themeConfig, keyTheme, handleThemeConfig } = useLayout()

    // States
    const [isOpenPopup, setIsOpenPopup] = useState(false)

    return (
        <HeaderWrapper
            navBarColor={themeConfig.navbar.color}
        >
            <IconsWrapper>
                <Icon icon={faCalendar} size="lg"/>
                <Icon icon={faMessage} size="lg"/>
                <Icon icon={faEnvelope} size="lg"/>
                <Icon icon={faCircleCheck} size="lg"/>
                <Icon
                    color={theme?.colors?.warning}
                    icon={faStar}
                    size="lg"
                />
            </IconsWrapper>
            <IconsWrapper>
                <Icon
                    icon={ keyTheme === 'light' ? faSun : faMoon}
                    size="lg"
                    onClick={() => handleThemeConfig(prev => ({
                        ...prev,
                        currentTheme: keyTheme === 'light' ? 'dark' : 'light'
                    })) }
                />
                <AvatarWrapper >
                    <AvatarInfo
                        onClick={() => setIsOpenPopup(!isOpenPopup)}
                    >
                        <div>
                            <UserName>{currentUser?.email}</UserName>
                        </div>
                        <Avatar size="md" />
                    </AvatarInfo>
                    <Popup
                        render={() => {
                            return (
                                <>
                                    <Typography
                                        onClick={() => logout()}
                                    >
                                            Cerrar Sesión &nbsp;
                                        <FontAwesomeIcon icon="sign-out" />
                                    </Typography>
                                </>
                            )
                        }}
                        visible={isOpenPopup}
                        onClose={() => setIsOpenPopup(false)}
                    />
                </AvatarWrapper>
            </IconsWrapper>
        </HeaderWrapper>
    )
}
