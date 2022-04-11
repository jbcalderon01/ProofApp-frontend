/* eslint-disable @typescript-eslint/no-explicit-any */
import { Radio, RadioGroup, Toggle } from '@app/ui/components'
import { Typography } from '@app/ui/components/GlobalComponent'
import React, { FC } from 'react'
import { lightTheme } from '@app/ui/styles/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useLayout } from '../../layoutMain.context'
import { TNavbarTypes } from '../../layoutMain.types'

import { Divider, Option, OptionWrapper, Section, SquareColor, ThemeCustomizerWrapper, ToggleThemeCustomizer } from './styled'

export const ThemeCustomizer:FC = () => {

    const {
        isOpenAsideThemeCustomizer,
        setAsideThemeCustomizer,
        handleThemeConfig,
        setAnchorAside,
        isAnchorAside,
        isHiddenAside,
        setHiddenAside,
        themeConfig
    } = useLayout()

    return (
        <ThemeCustomizerWrapper
            open={isOpenAsideThemeCustomizer}
        >
            <Section style={{ padding: '1.5em' }}>

                <Typography size="lg">
                    THEME CUSTOMIZER
                </Typography>
                <Typography color="variant" size="xs">
                    {'Customize & Preview in Real Time'}
                </Typography>
                <Divider/>
                <RadioGroup
                    title="Theme"
                >
                    <Radio
                        checked={themeConfig.currentTheme === 'light'}
                        label="Light"
                        value="light"
                        onChange={({ value }) => handleThemeConfig(prev => ({ ...prev, currentTheme: value as any }))}
                    />
                    <Radio
                        checked={themeConfig.currentTheme === 'dark'}
                        label="Dark"
                        value="dark"
                        onChange={({ value }) => handleThemeConfig(prev => ({ ...prev, currentTheme: value as any }))}
                    />
                </RadioGroup>
                <Divider/>
                <RadioGroup
                    title="Color Primario"
                >
                    {Object.entries(lightTheme.colors).map(([key, value]) => (
                        <SquareColor
                            key={key}
                            bgColor={value}
                            selected={themeConfig.primaryColor === value}
                            onClick={() => handleThemeConfig(prev => ({ ...prev, primaryColor: key }))}
                        />
                    ))}
                </RadioGroup>
                <Divider/>
                <RadioGroup
                    title="Menu Layout"
                >
                    <Radio
                        checked={themeConfig?.menuLayout === 'vertical'}
                        label="Vertical"
                        value="vertical"
                        onChange={({ value }) => handleThemeConfig(prev => ({ ...prev, menuLayout: value as string }))}
                    />
                    <Radio
                        checked={themeConfig?.menuLayout === 'horizontal'}
                        label="Horizontal"
                        value="horizontal"
                        onChange={({ value }) => handleThemeConfig(prev => ({ ...prev, menuLayout: value as string }))}
                    />
                </RadioGroup>
                <OptionWrapper>
                    <Option>
                    Menu Collapsed
                    </Option>
                    <Toggle
                        checked={!isAnchorAside}
                        onChange={({ checked }) => setAnchorAside(!checked)}
                    />
                </OptionWrapper>
                <OptionWrapper>
                    <Option>
                    Menu Hidden
                    </Option>
                    <Toggle
                        checked={isHiddenAside}
                        onChange={({ checked }) => setHiddenAside(checked)}
                    />
                </OptionWrapper>
                <Divider/>
                <RadioGroup
                    title="Navbar color"
                >
                    {Object.entries(lightTheme.colors).map(([key, value]) => (
                        <SquareColor
                            key={key}
                            bgColor={value}
                            selected={themeConfig.navbar.color === value}
                            onClick={() => handleThemeConfig(prev => ({ ...prev, navbar: { ...prev.navbar, color: value } }))}
                        />
                    ))}
                </RadioGroup>
                <RadioGroup
                    title="Navbar Type"
                >
                    <Radio
                        checked={themeConfig.navbar.type === 'sticky'}
                        label="Sticky"
                        value="sticky"
                        onChange={({ value }) => handleThemeConfig(prev => ({ ...prev, navbar: { ...prev.navbar, type: value as TNavbarTypes } })) }
                    />
                    <Radio checked={themeConfig.navbar.type === 'static'} label="Static" value="static" onChange={({ value }) => handleThemeConfig(prev => ({ ...prev, navbar: { ...prev.navbar, type: value as TNavbarTypes } })) }/>
                    <Radio checked={themeConfig.navbar.type === 'hidden'} label="Hidden" value="hidden" onChange={({ value }) => handleThemeConfig(prev => ({ ...prev, navbar: { ...prev.navbar, type: value as TNavbarTypes } })) }/>
                </RadioGroup>
            </Section>
            <ToggleThemeCustomizer
                onClick={() => setAsideThemeCustomizer(prev => !prev)}
            >
                <FontAwesomeIcon spin icon="gear"/>
            </ToggleThemeCustomizer>
        </ThemeCustomizerWrapper>
    )
}
