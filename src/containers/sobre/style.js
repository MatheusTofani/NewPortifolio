import styled from "styled-components";

export const SobreContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 30px;
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 40px;    
    }
`;

export const SobreTitle = styled.h1`
    color: white;
`;

export const SobreDescription = styled.p`
    color: white;
`;