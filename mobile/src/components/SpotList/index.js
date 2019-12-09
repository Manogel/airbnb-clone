import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {withNavigation} from 'react-navigation';

import {
  Container,
  Title,
  Bold,
  ViewItem,
  Photo,
  Company,
  Price,
  Button,
  TextButton,
} from './styles';
import api, {rota_base} from '~/services/api';

function SpotList({tech, navigation}) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/spots', {
        params: {tech},
      });

      console.log(response.data);
      setSpots(response.data);
    }
    loadSpots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function reservationRequest(id) {
    navigation.navigate('Book', {id});
  }

  return (
    <Container>
      <Title>
        Empresas que usam <Bold>{tech}</Bold>
      </Title>
      <FlatList
        data={spots}
        keyExtractor={spot => String(spot._id)}
        horizontal
        style={{paddingHorizontal: 30}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <ViewItem>
            <Photo
              resizeMode="cover"
              source={{uri: item.thumbnail_url.replace('localhost', rota_base)}}
            />
            <Company>{item.company}</Company>
            <Price>{item.price ? `R$ ${item.price}/dia` : 'GRATUITO'}</Price>
            <Button
              activeOpacity={0.5}
              onPress={() => reservationRequest(item._id)}>
              <TextButton>Soliciar reserva</TextButton>
            </Button>
          </ViewItem>
        )}
      />
    </Container>
  );
}

export default withNavigation(SpotList);
