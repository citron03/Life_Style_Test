import { BackgroundDivStyled } from './BackgroundDivStyled';
import styled from "styled-components";
import results from '../data/results';

const Imgae = styled.img`
    border: 0.3rem solid white;
    width: 95%; 
    height: auto;
    margin: 2rem;
`;

const TextSpan = styled.span`
    margin: 1rem;
    @media (max-width: 767px){
    //모바일
        font-size: 1.3rem;
    }
`
const ButtonEnd = styled.button`
    font-size: 1rem;
    text-align: center;
    width: auto;
    height: 5rem;
    padding: 1em;
    margin: 1em;
    border: 0.3rem solid #a29bfe;
    border-radius: 1.5em;
    background-color: #1B1464;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
`;

const ResultDiv = styled.div`
    margin: 1rem;
    font-size: 2.5rem;
`

const Result = ( {nature, density, setPage, initialization} ) => {
    const result = results(nature, density); // 결과를 받아온다.
    // console.log("nature :",nature, "density :" ,density);

    // 카카오톡 공유 기능

    const shareKakao = () => {
        window.Kakao.Link.sendDefault({
            objectType: "feed",
            content: {
                title: result[1],
                description: result[2],
                imageUrl: "https://pixabay.com/get/g220c0e434719966b29c42588ef03214cbfc1cb2e4448ae08c028ce64b0f9112bf8e238687b4f819b226324b54975f18d77a044ab69efbba5bac6a30ca71b31775d35ff8228c6c391d641d89835a7e75b_640.jpg",
                link: {
                mobileWebUrl: window.location.href,
                androidExecParams: "test",
                },
            },
            buttons: [
                {
                title: "Life Style Place",
                link: {
                    mobileWebUrl: window.location.href,
                    },
                },
            ],
        });
    }

    return (
        <BackgroundDivStyled>
            <ResultDiv>result : {result[1]}</ResultDiv>
            <Imgae src={result[0]}  alt={result[1]} />
            {result[2].split("\n").map((content, idx) => <TextSpan key={idx}>{content}</TextSpan>)}
            <ButtonEnd onClick={() => {
                initialization();
                setPage(0)
                }}>처음으로</ButtonEnd>
            <ButtonEnd onClick={shareKakao}>카톡으로 공유하기</ButtonEnd>
        </BackgroundDivStyled>
    )
};

export default Result;