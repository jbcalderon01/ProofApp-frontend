import { TTheme } from '@app/ui/styles/declarations'
import styled, { css } from 'styled-components'

import { TButtonWrapper } from './types'

const BUTTON_SIZES = {
    default: () => 'padding: .786rem 1.5rem;',
    small: () => 'padding: .486rem 1rem;',
    large: () => 'padding: .8rem 2rem;'
}

// Button Variants
const BUTTON_VARIANTS = {
    filled(theme: TTheme, color: keyof TTheme['colors']) {
        return css`
            background-color: ${ theme.colors[color] };
            border: 1px solid ${ theme.colors[color] };
            color: ${ theme.text.light };
        `
    },
    border(theme: TTheme, color: keyof TTheme['colors']) {
        return css`
            border: 1px solid ${ theme.colors[color] };
            color: ${ theme.colors[color] };
    `
    },
    flat(theme: TTheme, color: keyof TTheme['colors']) {
        return css`
            color: ${ theme.colors[color] };
        `
    },
    gradient(theme: TTheme, color: keyof TTheme['colors']) {
        return css`
            background-image: ${ theme.gradientColors[color] };
            background-color: transparent;
            border: 1px solid transparent;
            color: ${ theme.text.light };
        `
    },
    round(theme: TTheme, color: keyof TTheme['colors']) {
        return css`
            border: 1px solid ${ theme.colors[color] };
            color: ${ theme.colors[color] };
            border-radius: 50rem;
        `
    },

}

export const ButtonWrapper = styled.button<TButtonWrapper>`
    cursor: pointer;
    text-align: center;
    border-radius: 0.358rem;
    ${ ({ size }) => BUTTON_SIZES[size] };
    ${ ({ variant, theme, color }) => BUTTON_VARIANTS[variant](theme, color) };
`
