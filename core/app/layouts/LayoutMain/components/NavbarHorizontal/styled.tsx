import styled from 'styled-components';

export const NavBarHorizontalWrapper = styled.div`
    display: flex;
    gap: 10px;
    padding: 0.5rem 1rem;
    margin: 1.3em;
    transition: .2s;
    background-color: ${ ({ theme }) => theme.interface.backgrounds.main };
    box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%);
    margin: 1.3rem 0;
    color: ${ ({ theme }) => theme.text.main };
    border-radius: 6px;

`
