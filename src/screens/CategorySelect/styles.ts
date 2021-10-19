import styled from "styled-components/native";

import { ScrollView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Scroll = styled(ScrollView)`
  min-height: ${RFValue(165)}px;
  max-height: ${RFValue(165)}px;
  padding-left: ${RFValue(5)}px;

`