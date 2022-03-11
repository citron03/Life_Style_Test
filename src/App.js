import Main from './component/Main'
import Query from './component/Query'
import Result from './component/Result'
import styled from "styled-components";
import { useState } from "react";

const AppStyled = styled.div `
    background-color: #673ab7;
    color: white;
    display: flex;
    justify-content: center;
`;

function App() {
  let [page, setPage] = useState(0);
  // 0은 메인 페이지, 1은 질문 페이지, 2는 결과 창
  let [data, setData] = useState(0); // 결과 도출을 위한 값
  return (
      <AppStyled>
        {
          page === 0 ? <Main setPage={setPage}/> : 
          page === 1 ? <Query/> : <Result/>
        }
      </AppStyled>
  );
}

export default App;
