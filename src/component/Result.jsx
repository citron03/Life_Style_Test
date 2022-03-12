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
    return (
        <BackgroundDivStyled>
            <ResultDiv>result : {result[1]}</ResultDiv>
            <Imgae src={result[0]}  alt={result[1]} />
            {result[2].split("\n").map((content, idx) => <TextSpan key={idx}>{content}</TextSpan>)}
            <ButtonEnd onClick={() => {
                initialization();
                setPage(0)
                }}>처음으로</ButtonEnd>
        </BackgroundDivStyled>
    )
};

export default Result;