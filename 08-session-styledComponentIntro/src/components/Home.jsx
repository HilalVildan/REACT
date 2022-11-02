import React from 'react'
import ButonStyle, { ButonStyle2 } from './styles/ButonStyle'
import ContainerStyle from './styles/ContainerStyle'
import HeaderStyle from './styles/HeaderStyle'

const Home = () => {
  return (
    <ContainerStyle>
    <HeaderStyle>Styled Component</HeaderStyle>

    <ButonStyle hilal>TIKLA</ButonStyle>
    <ButonStyle>TIKLA2</ButonStyle>
    <ButonStyle2 hilmi>TIKLA Domates</ButonStyle2>
    <ButonStyle2>TIKLA Domates2</ButonStyle2>
    </ContainerStyle>
  )
}

export default Home