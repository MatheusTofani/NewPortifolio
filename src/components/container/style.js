import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  display: ${(props) => props.display || "block"};
  justify-content: ${(props) => props.justiify || ""};
  align-items: ${(props) => props.align || "center"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0 auto"};

  @media (max-width: 768px) {
    display: ${(props) => props.displayMobile || "block"};
    max-width: 100%;
    width: 100%;
    padding: 0 20px;
    flex-direction: ${(props) => props.flexDirectionMobile || "column"};
    justify-content: center;
  }
`;
