import styled, { DefaultTheme } from 'styled-components';

const TYPOGRAPHY_SIZES = {
    xs: '1rem',
    sm: '1.07rem',
    lg: '1.286rem',
    '1x': '1.5rem',
    '2x': '1.714rem',
    '3x': '2rem'
}

type TTypography = {
    size?: keyof typeof TYPOGRAPHY_SIZES
    color?: keyof DefaultTheme['text']
    margin?: string
}

export const Typography = styled.p<TTypography>`
    margin: ${ ({ margin }) => margin || 0 };
    font-size: ${ ({ size = 'sm' }) => TYPOGRAPHY_SIZES[size] };
    color: ${ ({ color='main', theme }) => theme.text[color] };
`

export const Card = styled.div`
    padding: 2em 1em;
    background-color: ${ ({ theme }) => theme.interface.backgrounds.main };
    box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%);
`

