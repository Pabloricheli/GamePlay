import React from "react";
import { useTheme } from "styled-components";

import { Avatar } from "../Avatar";

import { 
  Container,
  Div,
  DivUser,
  Gretting,
  Username,
  MessageText
} from "./styles";

export function Profile() {
  const {colors} = useTheme()
  return (
    <Container>
      <Avatar firstColor={colors.secondary50} secondColor={colors.secondary70} urlImage={'https://github.com/pabloricheli.png'} />
      <Div>
        <DivUser>
          <Gretting>Olá</Gretting>
          <Username>Pablo</Username>
        </DivUser>
        <MessageText>Hoje é dia de vitória</MessageText>
      </Div>
    </Container>
  )
}