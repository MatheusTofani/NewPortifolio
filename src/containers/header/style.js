import styled from "styled-components";

export const HeaderContainer = styled.div`
 position: sticky;
  width: 100%;
  height: 100px;
  background-color: #0f0821;
  border-bottom: 3px solid;
  border-image: linear-gradient(90deg, #714ad3 0%, #cbbdef 100%);
  border-image-slice: 1;
 top: 0;
 left: 0;
 z-index: 1000;
`;

export const Branding = styled.div`
  font-size: 30px;
  background: linear-gradient(90deg, #643acf 0%, #8b6bdb 56%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;

  @media (max-width: 768px) {
   content: "MT";
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderListItem = styled.li`
  position: relative;
  color: white;
`;

export const HeaderListLink = styled.a`
  text-decoration: none;
  color: white;


  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "";
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #643acf 0%, #8b6bdb 56%);
    position: absolute;
    bottom: -20%;
    left: 0;
    right: 0;
    margin: 0 auto;
    transition: width 0.3s ease-in-out;
   
  }

  &:hover::after {
    width: 100%;
  }
`;
