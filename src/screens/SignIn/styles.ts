import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`

export const Content = styled.View`
  margin-top: -70px;
  padding: 0 ${RFValue(50)}px;
`

export const Image = styled.Image`
  width: 100%;
  height: ${RFValue(360)}px;
`
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.title700};
  line-height: 40px;
  color: ${({theme})=> theme.colors.heading};
  text-align: center;
  font-size: ${RFValue(40)}px;
  margin-bottom: 16px;
`
export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.text400};
  line-height: 25px;
  color: ${({theme})=> theme.colors.heading};
  text-align: center;
  font-size: ${RFValue(15)}px;
  margin-bottom: 64px;
`

