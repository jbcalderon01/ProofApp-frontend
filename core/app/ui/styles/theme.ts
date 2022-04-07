
const general = {
    colors: {
        primary: '#7367f0',
        secondary: '#82868b',
        success: '#28c76f',
        warning: '#ff9f43',
        danger: '#ea5455',
        info: '#00cfe8',
    },
    lightenVariants: {
        primary: '#9e95f5',
        secondary: '#9ca0a4',
        success: '#48da89',
        warning: '#ffb976',
        danger: '#f08182',
        info: '#1ce7ff',
    },
    darkenVariants: {
        primary: '#4839eb',
        secondary: '#696d71',
        success: '#1f9d57',
        warning: '#ff8510',
        danger: '#e42728',
        info: '#00a1b5',
    },
    gradientColors: {
        primary: 'linear-gradient(47deg,#7367f0,#9e95f5)',
        secondary: 'linear-gradient(47deg,#82868b,#9ca0a4)',
        success: 'linear-gradient(47deg,#28c76f,#48da89)',
        warning: 'linear-gradient(47deg,#ff9f43,#ffb976)',
        danger: 'linear-gradient(47deg,#ea5455,#f08182)',
        info: 'linear-gradient(47deg,#00cfe8,#1ce7ff)',
    }
}

export const lightTheme = {
    interface: {
        backgrounds: {
            main: '#ffffff',
            variant: '#f8f8f8',
            darken: '#f8f8f8'
        }
    },
    text: {
        main: '#5e5873',
        variant: '#a6a4b0',
        light: '#ffff',
    },
    ...general
}

export const darkTheme = {
    interface: {
        backgrounds: {
            variant: '#161d31',
            main: '#283046',
        }
    },
    text: {
        variant: '#5e5873',
        main: '#d8d6de',
        light: '#ffff',
    },
    ...general
}
const themes = {
    light: lightTheme,
    dark: darkTheme
}

export default themes
