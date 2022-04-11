import styled from 'styled-components'

import { TAsideContainer, TAsideWrapper } from './types'

export const AsideContainer = styled.div<TAsideContainer>`
    display: flex;
    width: ${ ({ isOpenAside, isAnchorAside }) => {
        if (!isAnchorAside) return '70px'
        if (isOpenAside) return '360px'
    } };
    
`

export const AsideWrapper = styled.div<TAsideWrapper>`
    grid-area: aside;
    padding: 0 10px;
    background-color: ${ ({ theme }) => theme.interface.backgrounds.main };
    box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%);
    width: ${ ({ isOpenAside }) => isOpenAside ? '260px': '50px' };
    transition: .2s;
    position: fixed;
    z-index: 999999;
    transition: .2s;
    top: 0;
    ${ ({ isAnchorAside }) => !isAnchorAside && `
        position: absolute;
    ` }
    ${ ({ isHiddenAside }) => isHiddenAside && `
        position: absolute;
        margin-left: -280px;
    ` }
`
// export const AsideWrapper = styled.div<TAsideWrapper>`
//     grid-area: aside;
//     padding: 0 10px;
//     background-color: ${ ({ theme }) => theme.interface.backgrounds.main };
//     box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%);
//     width: ${ ({ isOpenAside }) => isOpenAside ? '260px': '50px' };
//     transition: .2s;
//     /* position: fixed; */
//     z-index: 9999;
//     transition: .2s;
//     top: 0;
//     ${ ({ isAnchorAside }) => !isAnchorAside && `
//         position: absolute;
//     ` }
//     ${ ({ isHiddenAside }) => isHiddenAside && `
//         position: absolute;
//         margin-left: -280px;
//     ` }
// `
export const NavItemsWrapper = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
`
export const NavBarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 18px 0;
`

export const NavLogo = styled.div`

`

export const Divider = styled.div`
    padding: 1.5rem 0 0.8rem 2.2rem;
    font-size: .9rem;
    color: ${ ({ theme }) => theme.text.variant };
`
