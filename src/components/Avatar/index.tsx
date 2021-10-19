import React from "react";

import { 
  Container,
  Image 
} from "./styles";


type Props = {
  urlImage?: string;
  firstColor: string;
  secondColor: string;
}

export function Avatar({urlImage , firstColor, secondColor}: Props){
  return (
    <Container colors={[firstColor, secondColor]}>
      <Image source={{ uri: urlImage }}/>
    </Container>
  )
}