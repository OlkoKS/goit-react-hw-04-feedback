import { styled } from 'styled-components';

const BtnContainer = styled.ul`
    padding-left: 0;
    display: flex;
    gap: 10px;
`

const BtnElement = styled.button`
    width: 120px;
    height: 40px;
    padding: 5px;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    background-color: #fff;
    border: 1px solid #c1c3cf;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    &:hover {
        cursor: pointer;
    }
`

export {BtnContainer, BtnElement}