import React, {useEffect} from 'react';
import {View} from 'react-native';

import {Container} from './styles';
import api from '~/services/api';

export default function SpotList({tech}) {
  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/spots', {
        params: {tech},
      });

      console.log(response.data);
    }
    loadSpots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Container />;
}
