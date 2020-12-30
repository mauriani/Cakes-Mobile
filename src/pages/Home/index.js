import React from 'react';
import {Text} from 'react-native';

//import Header from '../../components/Header';
import {Container, Header, Image, Card} from './styles';

function Home() {
  return (
    <Container>
      <Header>
        <Image source={require('../../assets/image/logo.png')} />
      </Header>

      <Card>
        <Img />
        <Info>
          <TitleProduct>Bolo de Banana</TitleProduct>
        </Info>
      </Card>
    </Container>
  );
}

export default Home;
