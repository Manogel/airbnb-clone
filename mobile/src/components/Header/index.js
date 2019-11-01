import React from 'react';
import {View} from 'react-native';
import logo from '~/assets/logo.png';
import {Container, Logo} from './styles';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} resizeMode="contain" />
    </Container>
  );
}
