import React from 'react';

import { 
  Container,
  Image,
  Content,
  Title,
  Text,
} from './styles';

import { useTheme } from 'styled-components';

import DiscordImg from '../../assets/discord.png'
import IllustrationImg from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';


export function SignIn({navigation}) {

  function handleSignIn(){
    console.log('Go Home')
    navigation.navigate('Home')
  }

  const {colors} = useTheme();

  return (
    
      <Container>
        <Image source={IllustrationImg} resizeMode='stretch'/>

        <Content>
          <Title>
            Conecte-se {`\n`}
            e organize suas {`\n`}
            jogatinas.
          </Title>
          <Text>
            Crie grupos para jogar seus games{`\n`}
            favoritos com seus amigos
          </Text>
          <ButtonIcon title={'Entrar com Discord'} img={DiscordImg} onPress={handleSignIn}/>
        </Content>
      </Container>
    
  );
}
