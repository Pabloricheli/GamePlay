import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 56px;
  background-color: ${({theme}) => theme.colors.primary};
  flex-direction: row;
  border-radius: 8px;
  align-items: center;
`;

export const IconWrapper = styled.View`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-color: ${({theme})=> theme.colors.line};
`

export const Image = styled.Image`
  width: 24px;
  height: 18px;
`

export const Title = styled.Text`
  flex:1;
  font-family: ${({theme}) => theme.fonts.text500};
  color: ${({theme}) => theme.colors.heading};
  font-size: ${RFValue(15)}px;
  text-align: center;
`

