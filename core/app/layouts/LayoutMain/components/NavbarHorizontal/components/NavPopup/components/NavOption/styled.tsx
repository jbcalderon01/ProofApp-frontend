import styled from 'styled-components'

export const NavOptionWrapper = styled.div`
    position: relative;
`
export const NavFloatMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    width: 180px;
    top:-10px;
    left: 200px;
    background-color: ${ ({ theme }) => theme.interface.backgrounds.main };
    /* box-shadow: 0 5px 25px rgb(34 41 47 / 10%); */
    /* box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%); */
    box-shadow: 0 4px 24px 0 rgb(0 0 0 / 16%);
    padding: 0.715rem 1.25rem;
    border-radius: 6px;
`

export const NavOptionTextWrapper = styled.div<{isOpen: boolean}>`
    display: flex;
    justify-content: space-between;
    align-items:center;	
    color: ${ ({ theme, isOpen }) => isOpen ? theme.colors.primary: theme.text.main };
    cursor: pointer;
    transition: .2s;
    :hover {
        padding-left: 5px;
    }
`

