import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import { 
  Container,
  Icon 
} from './styles';


export function ButtonAdd({...rest} : RectButtonProps) {
  const {colors} = useTheme()

  return (
    <Container {...rest}>
      <Icon name={'plus'} size={24} color={colors.heading}/>
    </Container>
  )
}
