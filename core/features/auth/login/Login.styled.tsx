import styled from 'styled-components'

export const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 4rem;
    background-color: ${ ({ theme }) => theme.interface.backgrounds.main };
    
`
export const Form = styled.form`
    width: 100%;
`
export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const FieldsWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
