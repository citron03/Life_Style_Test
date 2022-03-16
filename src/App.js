import Main from './component/Main'
import Query from './component/Query'
import Result from './component/Result'
import styled from "styled-components";
import { useState, useEffect } from "react";

const AppStyled = styled.div `
    background-color: #a29bfe;
    color: white;
    display: flex;
    justify-content: center;
`;

const FooterStyled = styled.div `
    background-color: #5758BB;
    color: black;
    display: flex;
    justify-content: center;
`;

function App() {
  let [page, setPage] = useState(0);
  // 0은 메인 페이지, 1은 질문 페이지, 2는 결과 창
  // 결과 도출을 위한 값
  let [nature, setNature] = useState(0);  // 친 자연
  let [density, setDensity] = useState(0);  // 밀도
  const initialization = () => {
    setNature(0);
    setDensity(0);
  }
  // console.log("nature :",nature, "density :" ,density);

    useEffect(() => { // 단 한 번만 실행되어야 한다.
        window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY); // window.으로 접근해야 한다.
    }, []);

  return (
    <>
      <AppStyled>
        {
          page === 0 ? <Main setPage={setPage}/> : 
          page === 1 ? <Query setNature={setNature} setDensity={setDensity} setPage={setPage}/> 
          : <Result nature={nature} density={density} setPage={setPage} initialization={initialization}/>
        }
      </AppStyled>
      <FooterStyled>이 사이트는 해남군청의 해남체를 이용하여 작성되었습니다.</FooterStyled>
    </>
  );
}

export default App;
