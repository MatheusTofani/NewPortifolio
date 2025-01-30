import styled from "styled-components";

export const ProjetosGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 30%);
    gap: 3%;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 100%);
    }
`;

export const ModalContaier = styled.div`
   display: flex;
   height: 100%;
`;

export const ModalContent = styled.div`
  width: 50%;
  padding:0 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  border-right: ${props => props.border || "none"};
`;

export const ModalFerramentas = styled.div`
display: flex;
justify-content: start;
align-items: center;
`;

export const ModalIcons = styled.div`
  display: flex; 
  gap: 20px; 
  color: white;
  font-size: 30px;
  margin-left: 20px;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between; 
`;

export const Link = styled.a`
  color: ${props => props.color || "#5a30c5"};  
  font-weight: bold;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 14px;
  transition: all 0.3s ease;
  background-color: ${props => props.backgroundColor || "white"};
  display: flex;
  align-items: center;

  .github {
  font-size : 20px;
  margin-right: 5px;
}

  &:hover {
    background-color: ${props => props.hoverBackgroundColor || "#c4b1f1"};
  }
`;

export const ProjectTitle = styled.h1`
color: white;
margin-bottom: 40px;
`;