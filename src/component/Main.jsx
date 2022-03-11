// 가장 처음 화면이다.
import styled from "styled-components";
import image from './../data/picture/main.jpg';

const TitleDivStyled = styled.div`
    font-size: 3rem;
    text-align: center;
    width: 80vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #38006b;
`;

const Image = styled.img`
    width: 40%;
    height: 40%;
    padding: 4%;
`;

const ButtonStart = styled.button`
    font-size: 1rem;
    text-align: center;
    width: 8vw;
    height: 8vh;
    padding: 0.75em 1em;
    border: 2px solid #9c4dcc;
    border-radius: 1.5em;
    background-color: #6a1b9a;
    color: white;
    font-size: 1rem;
    cursor: pointer;
`;

export default ({setPage}) => {
    return (
        <TitleDivStyled>
            <p>당신의 라이프 스타일에 맞는 장소를 테스트 하세요!</p>
            <Image src = {image} />
            <ButtonStart onClick={() => setPage(1)}>시작 하기!</ButtonStart>
        </TitleDivStyled>
    );
}