// 가장 처음 화면이다.
import styled from "styled-components";
import image from './../data/picture/main.jpg';
import {BackgroundDivStyled} from './BackgroundDivStyled';

const Image = styled.img`
    width: 40vw;
    height: 40vh;
    padding: 4%;
    object-fit: cover;
`;

const ButtonStart = styled.button`
    font-size: 1rem;
    text-align: center;
    width: 8vw;
    height: 8vh;
    padding: 0.75em 1em;
    border: 0.3rem solid #a29bfe;
    border-radius: 1.5em;
    background-color: #1B1464;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
`;

const Main = ({setPage}) => {
    return (
        <BackgroundDivStyled>
            <p>당신의 라이프 스타일에 맞는 장소를 테스트 하세요!</p>
            <Image src = {image} />
            <ButtonStart onClick={() => setPage(1)}>시작 하기!</ButtonStart>
        </BackgroundDivStyled>
    );
}

export default Main;