import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import { TArrowIcon, TNavItemWrapper } from './types'

export const NavItemWrapper = styled.div<TNavItemWrapper>`
    color: ${ ({ theme }) => theme.text.main };
    border-radius: 4px;
    ${ ({ isExistSubmenu, active, theme }) => {
        if (isExistSubmenu) {return `
                background-color: ${ theme.interface.backgrounds.variant };
            `}
        if (active) {return `
                background-image: ${ theme.gradientColors.primary };
                box-shadow: 0 0 10px 1px ${ theme.lightenVariants.primary };
                color: ${ theme.text.light };
            `}

        return ''
    } }
`
export const Icon = styled(FontAwesomeIcon)`

`
export const Navigation = styled.div`
    display: grid; 
    grid-template-columns: 30px 1fr 23px 1px;
    grid-column-gap: 10px;
    align-items:center;
    padding: 10px 15px 10px 15px;
    cursor: pointer;
    transition: .2s;
    :hover {
        padding: 10px 15px 10px 20px;
    }
`

export const NavigationText = styled.div`
    font-size: 1.1rem;
`

export const Notification = styled.div`
    display:flex;
    width: 20px;
    height:  20px;
    font-size: 85%;
    align-items: center;
    justify-content:center;
    border-radius: 50%;
    background-color: ${ ({ theme }) => theme?.lightenVariants?.warning };    
    color: ${ ({ theme }) => theme?.darkenVariants?.warning };    
`

export const ArrowIcon = styled(FontAwesomeIcon)<TArrowIcon>`
    transform: ${ ({ open }) => open && 'rotate(90deg)' };
    transition: .2s;
`

export const NavSubmenu = styled.div`
    display: flex;
    align-items:center;
    cursor: pointer;
    padding: 10px 15px 10px 25px;
    transition: .2s;
    gap: 10px;
    :hover {
        padding: 10px 15px 10px 28px;
    }
`
