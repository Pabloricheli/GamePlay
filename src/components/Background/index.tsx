import React, { ReactNode } from 'react';
import { 
  Container 
} from './styles';

type Props = {
  children: ReactNode;
  firstColor: string;
  secondColor: string;
}

export function LinearGradient({children , firstColor, secondColor, ...rest}: Props){
  return (
    <Container colors={[firstColor, secondColor]} {...rest}>
      {children}
    </Container>
  );
}