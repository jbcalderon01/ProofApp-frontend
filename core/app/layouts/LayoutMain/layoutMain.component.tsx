import React, { FC } from 'react'

import { HeaderComponent, Children, ThemeCustomizer, NavBarHorizontal, AsideComponent } from './components'
import { useLayout } from './layoutMain.context'
import { Content, HeaderSection, LayoutMainFlex } from './layoutMain.styled'

export const LayoutMainComponent: FC = ({ children }) => {

    const { themeConfig } = useLayout()

    return (
        <LayoutMainFlex>
            {themeConfig.menuLayout === 'vertical' && <AsideComponent/>}
            <Content>
                <HeaderSection navBarType={themeConfig.navbar.type} >
                    <HeaderComponent/>
                    { themeConfig.menuLayout === 'horizontal' && <NavBarHorizontal/>}
                </HeaderSection>
                <Children>
                    {children}
                </Children>
            </Content>
            <ThemeCustomizer/>
        </LayoutMainFlex>
    )
}
