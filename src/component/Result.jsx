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
                description: "Life Style Place의 결과입니다.",
                imageUrl: "https://pixabay.com/get/gb3e0436ab09cbcffdaebaaa49a5a8af44f07a498b3a04d47529b6a77972ebaec16ba33ca189363f90b397a39e30dc538bbe9ae77f5de1c33f258e4c77f1f1d4bc3753fae7d2407ce6a6a785c409c4628_1280.png",
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