
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import { TNavItemButton } from './types'

export const NavItemWrapper = styled.div`    
    position: relative;

`
export const NavItemButton = styled.div<TNavItemButton>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0.715rem 1.25rem;
    width: max-content;
    border-radius: 4px;
    color: ${ ({ theme }) => theme.text.main };
    cursor: pointer;
    transition: .2s;
    ${ ({ active, theme }) => active && `
        background-image: ${ theme.gradientColors.primary };
        box-shadow: 0 0 10px 1px ${ theme.lightenVariants.primary };
        color: ${ theme.text.light };
    ` };
    :hover {
        background-color: ${ ({ theme }) => theme.interface.backgrounds.variant };
    }
`

export const NavItemIcon = styled(FontAwesomeIcon)`

`

export const NavArrowIcon = styled(FontAwesomeIcon)`

`

export const NavItemText = styled.div`
    font-size: 1rem;

`

