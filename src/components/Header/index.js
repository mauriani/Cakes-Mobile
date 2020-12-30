import React from 'react';
import {Text} from 'react-native';

import {Container, ContainerImage, Image} from './styles';

const Header = () => {
  return (
    <ContainerImage>
      <Image source={require('../../assets/image/logo.png')} />
    </ContainerImage>
  );
};

export default Header;
