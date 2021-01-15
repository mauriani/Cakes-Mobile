import React from 'react';

import {Container, Image} from './styles';

const Header = () => {
  return (
    <Container>
      <Image
        source={require('../../assets/image/logo.png')}
        resizeMode="cover"
      />
    </Container>
  );
};
export default Header;
