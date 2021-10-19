import styled, {css} from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { LinearGradient } from 'expo-linear-gradient'
import { RFValue } from "react-native-responsive-fontsize";

interface ICategoryProps {
  checked: false | true; 
}

export const Container = styled(RectButton)`  
`
export const Gradient = styled(LinearGradient)`
  width: ${RFValue(104)}px;
  height: ${RFValue(120)}px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`

export const Content = styled.View<ICategoryProps>`
  width: ${RFValue(100)}px;
  height: ${RFValue(116)}px;
  background-color: ${({theme})=> theme.colors.secondary40};
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  opacity: ${({checked}) => checked ? 1 : 0.4};
`

export const Checked = styled.View<ICategoryProps>`
width: 12px;
height: 12px;
background-color:  ${({theme})=> theme.colors.secondary100};
align-self: flex-end;
margin-right: 10px;
border-color: ${({theme})=> theme.colors.secondary50};
border-radius: 3px;
border-width: 2px;
opacity: ${({checked}) => checked ? 0.4 : 1 };

${({checked}) => checked && css` 
  width: 11px;
  height: 11px;
  background-color:  ${({theme})=> theme.colors.primary}
  border-color: transparent;
  
`}

`

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.title500};
  color: ${({theme})=> theme.colors.heading};
  font-size: ${RFValue(15)}px;  
`


