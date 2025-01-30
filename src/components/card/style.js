import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  &:hover .card-content {
    bottom: -36px;

    @media (max-width: 768px) {
      bottom: 0px;
    }
  }
`;

export const CardImage = styled.img`
  height: 180px;
  width: 100%;
  object-fit: cover;
  margin: 0;
  z-index: 1000;
  position: relative;
`;

export const CardContent = styled.div`
  height: 40px;
  background-color: #5a30c5;
  margin: 0;
  border-radius: 0 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
  z-index: 1;
  transition: bottom 0.3s ease;

  @media (max-width: 768px) {
    bottom: 0px;
    position: relative;
  }
`;

export const CardTitle = styled.p`
  color: white;
  font-size: 14px;
`;
