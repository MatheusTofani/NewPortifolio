import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 100px;
  border-top: 3px solid;
  border-image: linear-gradient(90deg, #714ad3 0%, #cbbdef 100%);
  border-image-slice: 1;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const FooterText = styled.p`
  color: white;
`;

export const  FooterRedes = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    margin-bottom: 10px; 
  }
`;

export const Redes = styled.a`
  color: white;
  font-size: 30px;
  transition: all 0.3s ease;

  &:hover {
    color: #D4A5FF; 
    transform: rotate(-10deg); 
  }
`;
