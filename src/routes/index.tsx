import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from '../components/Background';

import { AuthRoutes }  from './auth.routes';
import { useTheme } from 'styled-components';

export function Routes(){
  const { colors } = useTheme()
  return(
    <LinearGradient firstColor={colors.secondary100} secondColor={colors.secondary80} >
      <NavigationContainer >
        <AuthRoutes/>
      </NavigationContainer>
    </LinearGradient>
  )
}