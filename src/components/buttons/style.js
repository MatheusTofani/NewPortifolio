import styled from "styled-components";

export const Button = styled.button`
    padding: ${props => props.padding || "10px 20px"};
    background: ${props => props.background};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    border: ${props => props.border || "none"};
    border-radius: 50px;
    font-size: ${props => props.fontSize || "18px"};
    cursor: pointer;
   transition: all 0.2s ease-in-out; 


    &:hover {
        background-color: ${props => props.hoverBackgroundColor};
        background: ${props => props.hoverBackground};
    }
`;