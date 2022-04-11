/* eslint-disable @typescript-eslint/no-explicit-any */
import { useThemeContext } from '@app/ui/styles/theme.context';
import { createContext, FC, useCallback, useContext, useEffect, useState } from 'react';

import { TLayoutContext, TThemeConfig } from './layoutMain.types';

// Layout context
const LayoutContext = createContext<TLayoutContext>({} as unknown as TLayoutContext)

// Layout Context Provider
export const LayoutProvider:FC = ({ children }) => {

    // Hooks
    const { setTheme, setPrimaryColor, keyTheme } = useThemeContext()

    // State
    const [isOpenAside, setIsOpenAside] = useState(true)
    const [isAnchorAside, setIsAnchorAside] = useState(true)
    const [isOpenAsideThemeCustomizer, setIsOpenAsideThemeCustomizer] = useState(false)
    const [isHiddenAside, setIsHiddenAside] = useState(false)
    const [themeConfig, setThemeConfig] = useState<TThemeConfig>({
        navbar: {
            type: 'static',
            color: '',
        },
        currentTheme: 'light',
        primaryColor: 'primary',
        menuLayout: 'vertical',
    })

    /**
   * Change state aside
   * @param {boolean} state new state
   * @returns {void}
   */
    const setOpenAside = useCallback((state: boolean | ((prevState: boolean) => boolean)) => {
        if (typeof state === 'function') return setIsOpenAside(state(isOpenAside))
        setIsOpenAside(state)
    }, [isOpenAside])

    /**
   * Change anchor aside
   * @param {boolean} state new state
   * @returns {void}
   */
    const setAnchorAside = useCallback((state: boolean | ((prevState: boolean) => boolean)) => {
        if (typeof state === 'function') return setIsAnchorAside(state(isAnchorAside))
        setIsAnchorAside(state)
        if (!isOpenAside) return setOpenAside(true)
        if (isOpenAside) return setOpenAside(false)
    }, [isAnchorAside])

    /**
   * Change anchor aside
   * @param {boolean} state new state
   * @returns {void}
   */
    const setHiddenAside = useCallback((state: boolean | ((prevState: boolean) => boolean)) => {
        if (typeof state === 'function') return setIsHiddenAside(state(isHiddenAside))
        setIsHiddenAside(state)
    }, [isHiddenAside])

    /**
   * Change state aside theme customizer
   * @param {boolean} state new state
   * @returns {void}
   */
    const setAsideThemeCustomizer = useCallback((state: boolean | ((prevState: boolean) => boolean)) => {
        if (typeof state === 'function') return setIsOpenAsideThemeCustomizer(state(isOpenAsideThemeCustomizer))
        setIsAnchorAside(state)
    }, [isOpenAsideThemeCustomizer])

    /**
   * Change theme config
   * @param {boolean} state new state
   * @returns {void}
   */
    const handleThemeConfig = (state: TThemeConfig | ((prevState: TThemeConfig) => TThemeConfig)) => {
        if (typeof state === 'function') return setThemeConfig(state(themeConfig))
        setThemeConfig(state)
    }

    useEffect(() => {
        setTheme(themeConfig.currentTheme)
    }, [themeConfig.currentTheme])

    useEffect(() => {
        setPrimaryColor(themeConfig.primaryColor)
    }, [themeConfig.primaryColor])

    return (
        <LayoutContext.Provider value={{
            isOpenAside,
            setOpenAside,
            isAnchorAside,
            setAnchorAside,
            isHiddenAside,
            setHiddenAside,
            isOpenAsideThemeCustomizer,
            setAsideThemeCustomizer,
            handleThemeConfig,
            keyTheme,
            themeConfig
        }}>
            {children}
        </LayoutContext.Provider>
    )
}

export const useLayout = () => useContext(LayoutContext)
