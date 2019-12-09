import React, {useState, useEffect, useRef} from 'react';
import {AsyncStorage} from 'react-native';

import {
  Container,
  Logo,
  Form,
  Label,
  Input,
  Button,
  ButtonText,
} from './styles';
import logo from '~/assets/logo.png';
import api from '~/services/api';

export default function Login({navigation}) {
  const techRef = useRef();
  const [email, setEmail] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Home');
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleLogin() {
    const response = await api.post('/sessions', {email});
    const {_id} = response.data;
    await AsyncStorage.setItem('user', _id);
    await AsyncStorage.setItem('techs', techs);
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Logo source={logo} />
      <Form>
        <Label>SEU EMAIL *</Label>
        <Input
          placeholder="Seu email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={() => techRef.current.focus()}
        />

        <Label>TECNOLOGIAS *</Label>
        <Input
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
          ref={techRef}
          onSubmitEditing={handleLogin}
        />

        <Button onPress={handleLogin}>
          <ButtonText> Encontrar Spots </ButtonText>
        </Button>
      </Form>
    </Container>
  );
}
