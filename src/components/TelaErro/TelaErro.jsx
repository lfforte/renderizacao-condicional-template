import React from "react";
import { TelaError } from './styled'
import imgErro404 from '../../img/erro404.png'

const telaErro = () => {
  return (
    <TelaError>
      <img src={imgErro404} />
      <h1>Página não encontrada!</h1>
    </TelaError>
  )

}

export default telaErro