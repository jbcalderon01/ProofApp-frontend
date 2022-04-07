import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display:grid;
    grid-template-columns: 2fr 1fr;
    background-color: ${ ({ theme }) => theme.interface.backgrounds.darken };
`

export const ImageWrapper = styled.div`
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    position: relative;
`
export const AutorInfo = styled.div`
    position: absolute;
    bottom: 20px;
    right: 0;
    left: 0;
    width: max-content;
    margin: 0 auto;

`
