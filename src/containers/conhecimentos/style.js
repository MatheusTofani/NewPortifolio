import styled from "styled-components";

export const ConhecimentosTitle = styled.h1`
  color: white;
  margin-bottom: 40px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 22%);
  gap: 10%;
  column-gap: 3%;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  } 
`;

export const GridItem = styled.div`
  background-color: rgb(27, 12, 63);
  height: 100px;
  border-left: 20px solid rgb(33, 5, 104);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  color: rgb(78, 39, 160);
  transition: all 0.2s ease-in-out;

  &:hover {
    border-left: 20px solid rgb(114, 71, 223);
    color: rgb(14, 5, 32);
    background-color: rgb(65, 33, 148);
  }
`;

export const GridItemContent = styled.div`
  font-size: 20px;
`;

export const IconContent = styled.div`
  font-size: 40px;
`;
