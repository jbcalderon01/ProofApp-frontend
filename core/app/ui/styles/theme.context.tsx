import { createContext, FC, useCallback, useContext, useEffect, useState } from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'

import { TTheme } from './declarations'
import themes from './theme'

export type TThemeMode = 'dark' | 'light'

type TThemeContext = {
    theme: TTheme,
    setTheme: (mode: TThemeMode) => void,
    keyTheme: TThemeMode,
    setPrimaryColor: (key: keyof TTheme['colors']) => void
}

export const ThemeContext = createContext<TThemeContext>({} as unknown as TThemeContext)

export const useThemeContext = () => useContext(ThemeContext)

/**
 *Config you theme provider
 *
 */

export const Theme: FC = ({ children }) => {

    const [keyTheme, setKeyTheme] = useState<TThemeMode>('dark')
    const [currentTheme, setCurrentTheme] = useState(themes['dark'])

    const setMode = useCallback((mode: TThemeMode) => {
        window.localStorage.setItem('theme', mode)
    }, [])

    const setTheme = useCallback((mode:TThemeMode) => {
        setKeyTheme(mode)
        setMode(mode)
    }, [])

    const setPrimaryColor = (key: keyof TTheme['colors']) => {
        //Code
        setCurrentTheme({
            ...currentTheme,
            colors: {
                ...currentTheme.colors,
                primary: themes[keyTheme].colors[key]
            },
            darkenVariants:{
                ...currentTheme.darkenVariants,
                primary: themes[keyTheme].darkenVariants[key]
            },
            gradientColors: {
                ...currentTheme.gradientColors,
                primary: themes[keyTheme].gradientColors[key]
            },
            lightenVariants: {
                ...currentTheme.lightenVariants,
                primary: themes[keyTheme].lightenVariants[key]
            }
        })
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as TThemeMode

        localTheme ? setTheme(localTheme) : setTheme('light')
    }, [])

    useEffect(() => {
        setCurrentTheme(themes[keyTheme])
    }, [keyTheme])

    return (
        <ThemeContext.Provider value={{
            setTheme,
            keyTheme,
            setPrimaryColor,
            theme: currentTheme as any
        }}>
            <ThemeProviderStyled theme={currentTheme as any}>
                {children}
            </ThemeProviderStyled>
        </ThemeContext.Provider>
    )
}
