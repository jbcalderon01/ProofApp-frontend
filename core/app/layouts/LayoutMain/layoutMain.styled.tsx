import styled from 'styled-components'

import { THeaderSection, TLayoutMainWrapper } from './layoutMain.types'

export const LayoutMainWrapper = styled.div<TLayoutMainWrapper>`
  display: grid;
  grid-template-areas: 
  "aside header"
  "aside content";
  transition: .2s;
  grid-template-columns: ${ ({ isAnchorAside, isHiddenAside }) => {
        if (isHiddenAside) {
            return '0px'
        }

        return isAnchorAside ? '280px' : '80px'
    } } 1fr;
  grid-template-rows: max-content 1fr;
  grid-column-gap: 1.4em;
  grid-row-gap: 1.4em;
  width: 100vw;
  overflow: auto;
  height: 100vh;
  background-color: ${ ({ theme }) => theme.interface.backgrounds.variant };

`

export const LayoutMainFlex = styled.div`
  display: flex;  
  width: 100vw;
  overflow: auto;
  height: 100vh;
  background-color: ${ ({ theme }) => theme.interface.backgrounds.variant };
`

export const Content = styled.div`
    width: 100%;
    height: 150vh;
    margin: 0 1.4em;

`

const NAVBAR_TYPES = {
    sticky: () => `
      position: sticky;
      top: 20px;
  `,
    hidden: () => `
      position: absolute;
      top: -200px;
  `,
    static: () => `
      position: relative;
  `
}

export const HeaderSection = styled.div<THeaderSection>`
  ${ ({ navBarType = 'static' }) => NAVBAR_TYPES[navBarType] }
`
