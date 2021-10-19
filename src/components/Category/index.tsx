import React from "react";
import { useTheme } from "styled-components";


import { 
  Container, 
  Gradient,
  Content, 
  Checked,
  Title,
} from "./styles";

import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";


type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export function Category({title, icon: Icon , checked = true, ...rest} : Props ) {
  const {colors} = useTheme()
  return (
    <Container {...rest}>
      <Gradient colors={[colors.secondary50, colors.secondary70]}>
        <Content checked={checked}>
          <Checked checked={checked}/>
            <Icon 
              width={48} 
              height={48}
            />
         
          <Title>{title}</Title>
        </Content>
      </Gradient>
    </Container>
  )
}