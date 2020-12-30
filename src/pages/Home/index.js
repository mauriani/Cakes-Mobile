import React from 'react';
import {Text} from 'react-native';

//import Header from '../../components/Header';
import {Container, Header, Image} from './styles';

function Home() {
  return (
    <Container>
      <Header>
        <Image source={require('../../assets/image/logo.png')} />
      </Header>
    </Container>
  );
}

export default Home;
