import styled from 'styled-components'

export const NavPopupWrapper = styled.div<{visible: boolean}>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    width: 180px;
    top: 50px;
    left: 0;
    background-color: ${ ({ theme }) => theme.interface.backgrounds.main };
    padding: 0.715rem 1.25rem;
    border-radius: 6px;
    display: ${ ({ visible }) => visible ? 'flex': 'none' };
    box-shadow: 0 4px 24px 0 rgb(0 0 0 / 16%);

`
export const NavPopupText = styled.a<{isOpen: boolean}>`
    transition: .2s;
    cursor: pointer;
    text-decoration: none;
    color: ${ ({ theme, isOpen }) => isOpen ? theme.colors.primary: theme.text.main };
`
