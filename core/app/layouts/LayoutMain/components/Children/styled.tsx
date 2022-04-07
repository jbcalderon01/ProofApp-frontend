import styled from 'styled-components'

export const ChildrenWrapper = styled.div`
  grid-area: content;
  background-color: ${ ({ theme }) => theme.interface.backgrounds.main };
  box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%);
  min-height: 50vh;
  overflow: auto;
  padding: 2em 1em;
`
