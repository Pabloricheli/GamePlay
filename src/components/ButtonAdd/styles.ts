import styled from "styled-components/native";

import { RectButton  } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  background-color: ${({theme}) => theme.colors.primary};
  justify-content: center;
  border-radius: 8px;
  align-items: center;
`

export const Icon = styled(MaterialCommunityIcons)`
`