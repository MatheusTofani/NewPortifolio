import styled from "styled-components";

export const HomeContainer = styled.div`
  height: calc(100vh - 100px);
`;

export const HomeTitle = styled.h1`
  color: white;
  font-size: 60px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const HomeContent = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const bounceAnimation = `
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0); /* Posição inicial */
    }
    50% {
      transform: translateY(-10px); /* Sobe */
    }
  }
`;

export const ImageContainer = styled.div`
  animation: bounce 1.4s ease-in-out infinite;

  ${bounceAnimation}
`;

export const HomeWriter = styled.div`
  color: white;
  font-size: 30px;
  text-align: start;
  margin-top: 10px;

  @media (max-width: 768px) {
   font-size: 20px;
   text-align: center;
  }
`;  

export const HomeButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;