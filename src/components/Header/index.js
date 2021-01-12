import React from 'react';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Image, Cart, Itens} from './styles';

const Header = ({cartSize}) => {
  console.log(cartSize);
  const navigation = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/image/logo.png')}
        resizeMode="cover"
      />
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={28} color="#432818" />
        <Itens>{cartSize}</Itens>
      </Cart>
    </Container>
  );
};

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
