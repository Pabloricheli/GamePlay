import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient'
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(LinearGradient)`
  width: ${RFValue(53)}px;
  height: ${RFValue(53)}px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 22px;
`
export const Image = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 8px;
`