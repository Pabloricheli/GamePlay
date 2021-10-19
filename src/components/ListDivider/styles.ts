import styled from "styled-components/native";

export const Container = styled.View`
  width:70%;
  height: 1px;
  background-color: ${({theme})=> theme.colors.secondary40};
  margin: 21px 20px;
  align-self: flex-end;
`