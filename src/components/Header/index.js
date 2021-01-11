import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Image, Cart, Itens} from './styles';

const Header = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/image/logo.png')}
        resizeMode="cover"
      />
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={28} color="#432818" />
        <Itens>0</Itens>
      </Cart>
    </Container>
  );
};

export default Header;
