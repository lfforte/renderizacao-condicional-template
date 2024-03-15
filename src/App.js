import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {

  const [tela, setTela] = useState('Login');

  const renderizaTela = () => {
    switch (tela) {
      case "Login":
        return <TelaLogin setTela={setTela} />
      case "Cadastro":
        return <TelaCadastro setTela={setTela} />
      case "Principal":
        return <TelaPrincipal setTela={setTela} />
      default:
        return <TelaLogin setTela={setTela} />
    }
  }

  return (
    <MainContainer >
      <GlobalStyled />
      {/* {tela === 'Login' ? <TelaLogin setTela={setTela} /> : <TelaCadastro setTela={setTela} />} */}
      {renderizaTela()}
    </MainContainer>
  )

}

export default App;