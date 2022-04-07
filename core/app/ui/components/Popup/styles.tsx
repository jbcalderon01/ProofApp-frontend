import styled from 'styled-components'

import { Card } from '../GlobalComponent'

export const PopupWrapper = styled<any>(Card)`
    /* position: absolute; */
    display: ${ ({ visible }) => visible ? 'block' : 'none' };
    position: absolute;
    top: 110%;
    right: 0;
    width: 200px;
    padding: 12px;
    border-radius: 4px;
    z-index:1 ;
`
export const SearchField = styled.input`
    width: 100%;
    border:none;
    padding: 5px 10px;
    outline: none;
`
export const PopupContent = styled.div`
    display: flex;
    flex-direction: column;
`
export const PopupRow = styled.div`
    font-weight: 600 !important;
    padding: 10px ;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    :hover {
        background-color: #fafafa;
    };
`
export const SearchFieldWrapper = styled.div`
    display: grid;
    grid-template-columns: 90% 10%;
    border-bottom: 1px solid #d0d0d0;
    align-items: center;
`
