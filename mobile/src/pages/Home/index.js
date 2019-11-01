import React, {useState, useEffect} from 'react';
import {AsyncStorage} from 'react-native';

import {Container} from './styles';
import logo from '~/assets/logo.png';
import Header from '~/components/Header';
import SpotList from '~/components/SpotList';

export default function Home() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('techs').then(t => {
      setTechs(t.split(',').map(t => t.trim()));
    });

    console.log(techs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />
      {techs.map(t => (
        <SpotList key={t} tech={t} />
      ))}
    </Container>
  );
}
