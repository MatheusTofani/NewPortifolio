import styled from "styled-components";

export const Image = styled.img`
 height: ${(props) => props.height || "auto"};
 width: ${(props) => props.width || "auto"};
 border-radius: ${(props) => props.borderRadius || "0px"};
 border: ${(props) => props.border || "none"};

 @media (max-width: 768px) {
    height: ${(props) => props.heightMobile || "auto"};
  }
 `;
