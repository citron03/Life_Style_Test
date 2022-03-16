import styled from "styled-components";

export const BackgroundDivStyled = styled.div`
    font-size: 3rem;
    text-align: center;
    width: 80vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #5758BB;
    overflow:auto;
    @media (max-width: 767px){
    //모바일에서는 뒷배경 제거
        width: 100vw;
    }
`;