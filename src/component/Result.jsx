import { BackgroundDivStyled } from './BackgroundDivStyled';
import styled from "styled-components";
import results from '../data/results';

const Imgae = styled.img`
    border: 0.3rem solid white;
    height: 55%;
    width: 55%;
    margin: 2rem;
`;

const TextSpan = styled.span`
    margin: 1rem;
`

export default ( {nature, density, setPage} ) => {
    const result = results(nature, density); // 결과를 받아온다.
    return (
        <BackgroundDivStyled>
            <h1>result : {result[1]}</h1>
            <Imgae src={result[0]}  alt={result[1]} />
            {result[2].split("\n").map((content, idx) => <TextSpan key={idx}>{content}</TextSpan>)}
        </BackgroundDivStyled>
    )
};