import React from 'react';
import {View} from 'react-native';

import {Container, ContainerHeader, Image} from './styles';

const Header = () => {
  return (
    <Container>
      <ContainerHeader>
        <Image source={require('../../assets/image/logo.png')} />
      </ContainerHeader>
    </Container>
  );
};

export default Header;
