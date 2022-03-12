// 가장 처음 화면이다.
import styled from "styled-components";
import image from './../data/picture/main.jpg';
import {BackgroundDivStyled} from './BackgroundDivStyled';

const Image = styled.img`
    width: auto; 
    height: 100%;
    padding: 1em;
    background-size: cover;
`;

const ButtonStart = styled.button`
    font-size: 1rem;
    text-align: center;
    width: 10vw;
    height: 10vh;
    max-width: 30px;
    padding: 1em;
    margin-bottom: 1.5em;
    border: 0.3rem solid #a29bfe;
    border-radius: 1.5em;
    background-color: #1B1464;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
`;

const TitleDiv = styled.div`
    margin: 1rem;
    font-size: 3.5rem;
`

const Main = ({setPage}) => {
    return (
        <BackgroundDivStyled>
            <TitleDiv>당신의 라이프 스타일에 맞는 장소를 테스트 하세요!</TitleDiv>
            <Image src = {image} />
            <ButtonStart onClick={() => setPage(1)}>시작 하기!</ButtonStart>
        </BackgroundDivStyled>
    );
}

export default Main;