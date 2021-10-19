import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { 
  Button,
  Container,
  Content,
  Header,
  Title,
  Category,
  PlayersInfo,
  PlayerText,
  Footer,
  DateInfo,
  Date
} from './styles';

import { GuildIcon } from '../GuildIcon';
import { categories } from '../../utils/categories';

import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { useTheme } from 'styled-components';

export interface GuildProps {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
}

export interface AppointmentProps  {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

interface Props extends RectButtonProps {
 data: AppointmentProps;
}

export function  Appointment({data, ...rest}: Props){
  const [ category ] = categories.filter(item => item.id === data.category)
  const { owner } = data.guild

  const { primary, on } = useTheme().colors

  return (
    <Button {...rest}>
        <Container>

          <GuildIcon/>

          <Content>

            <Header>

              <Title>
                {data.guild.name}
              </Title>

              <Category>
                {category.title}
              </Category>

            </Header>

            <Footer>

              <DateInfo>
                  <CalendarSvg/>
                  <Date>
                    {data.date}
                  </Date>
              </DateInfo>

              <PlayersInfo>

                <PlayerSvg fill={ owner ? primary : on}/>
                <PlayerText style={{color: owner ? primary: on}}>
                  { owner ? 'Anfitrião' : 'Visitante'}
                </PlayerText>

              </PlayersInfo>

            </Footer>

          </Content>

        </Container>
    </Button>
  )
}