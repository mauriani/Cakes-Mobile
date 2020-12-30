import React from 'react';
import {Text} from 'react-native';

//import Header from '../../components/Header';
import {
  Container,
  Header,
  Image,
  Card,
  Img,
  Info,
  TitleProduct,
} from './styles';

function Home() {
  return (
    <Container>
      <Header>
        <Image source={require('../../assets/image/logo.png')} />
      </Header>

      <Card>
        <Img
          source={{
            uri:
              'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          }}
        />
        <Info>
          <TitleProduct>Bolo de Banana</TitleProduct>
        </Info>
      </Card>
    </Container>
  );
}

export default Home;
