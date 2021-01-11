import React from 'react';

import Header from '../../components/Header';
import {Container} from './styles';

const Home = () => {
  return (
    <Container>
      <Header />
      <ContainerProduct></ContainerProduct>
    </Container>
  );
};

export default Home;
