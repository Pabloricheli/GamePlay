import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${RFValue(24)}px;
`

export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.title700};
  color: ${({theme})=> theme.colors.heading};
  font-size: ${RFValue(18)}px;
`

export const Subtitle = styled.Text`
  font-family: ${({theme})=> theme.fonts.text400};
  color: ${({theme})=> theme.colors.highlight};
  font-size: ${RFValue(13)}px;
`