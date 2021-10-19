import React, { useState } from 'react';

import { 
  Header,
  Container,
  Content,
  ListFlat 
} from './styles';

import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ButtonAdd } from '../../components/ButtonAdd';
import { List } from '../../components/List';
import { Profile } from '../../components/Profile';

import { CategorySelect } from '../CategorySelect';
import { ListDivider } from '../../components/ListDivider';



export function Home() {
  const [ category, setCategory ] = useState('');

  const appoinments: AppointmentProps[] = [
    {
      id: "1",
      guild: {
        id: "1",
        name:"bravos brasil",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40",
      description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
    },
    {
      id: "2",
      guild: {
        id: "1",
        name:"bravos brasil",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40",
      description: "É hoje que vamos chegar ao challenger sem perder uma partida da md10"
    },
    
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)  
  }

  return (
    <Container>

      <Header>
        <Profile/>
        <ButtonAdd/>        
      </Header>
  
      <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />

      <Content>
        <List title='Partidas agendadas' subtitle='Total 6' />
        <ListFlat 
          data={appoinments} 
          keyExtractor={({ id }) => id} 
          renderItem={({item}) => (      
              <Appointment data={item} />
              
          )}
          ItemSeparatorComponent={() => <ListDivider/>}
          showsVerticalScrollIndicator={false}
          />
          
      </Content>
      
    </Container>
   
  )
}