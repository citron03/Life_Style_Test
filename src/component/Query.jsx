import { useState } from "react";
import { BackgroundDivStyled } from './BackgroundDivStyled';
import { queries } from './../data/queries';
import styled from "styled-components";

const QueryFrame = styled.div`
    border: 0.3rem solid white;
    height: 90%;
    width: 90%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const QuestionDiv = styled.div`
    height: 90%;
    width: 90%;
    margin: 1rem;
    font-size: 3.5rem;
`;

const AnswerDiv = styled.div`
    border: 0.3rem solid white;
    border-radius: 1.5em;
    height: 90%;
    width: 90%;
    margin: 1.5rem;
    padding: 1.5rem;
    font-size: 1.8rem;
    cursor: pointer;
`;

const Query = ( {setNature, setDensity, setPage} ) => {

    let [queryNun, setQueryNun] = useState(0);

    const answerClickAction = (idx) => {
        // 받은 idx 정보를 통해서 결과 데이터 저장
        setNature(prev => prev + queries[queryNun].A[idx][1].nature);
        setDensity(prev => prev + queries[queryNun].A[idx][1].density);

        if(queryNun + 1 === queries.length){
            setPage(2);  // 결과창으로 간다.
        } else{
            setQueryNun(prev => prev + 1); // 다음 질문으로
        }
    }

    return (
        <BackgroundDivStyled>
            <h1>질문 ({queryNun + 1}/{queries.length})</h1>
            <QueryFrame>
                <QuestionDiv>{queries[queryNun].Q}</QuestionDiv>
                {queries[queryNun].A.map((el, idx) => <AnswerDiv key={idx} onClick={() => answerClickAction(idx)}>{el[0]}</AnswerDiv>)}
            </QueryFrame>
        </BackgroundDivStyled>
    );
}

export default Query;