import styled from "styled-components/native";
import { FlatList } from 'react-native'

import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex:1;
`

export const Header = styled.View`
  width: 100%;
  padding: 0 ${RFValue(24)}px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight()+ 26}px;
  margin-bottom: ${RFValue(10)}px;
`

export const Content = styled.View`
  margin-top: ${RFValue(24)}px;
`

export const ListFlat = styled(FlatList)`
  margin-top: 24px ;
  margin-left: 24px;
`