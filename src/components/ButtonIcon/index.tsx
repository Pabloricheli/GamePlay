import React from 'react';
import { ImageProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { 
  Container,
  IconWrapper,
  Image,
  Title
} from './styles';

type ButtonProps = RectButtonProps &{
  title: string;
  img?: ImageProps;
}

export function ButtonIcon ( { title, img ,...rest} : ButtonProps){
  return (
    <Container {...rest}>
      {!img
      ? null 
      : (<IconWrapper>
        <Image source={img} />
        </IconWrapper>)}
      <Title>
        {title}
      </Title>
    </Container>
  );
}
