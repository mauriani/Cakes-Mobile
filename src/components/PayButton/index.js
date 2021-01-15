import React from 'react';
import {TouchableWithoutFeedback, Text} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import {Button, Itens} from './styles';

const PayButton = ({cartSize, onPress, focused}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button colors={focused ? ['#9AC8EB', '#5784BA'] : ['#fff', '#ccc']}>
        <Icon name="cart-outline" size={20} color={focused ? '#fff' : '#000'} />
        <Itens>{cartSize}</Itens>
      </Button>
    </TouchableWithoutFeedback>
  );
};

export default connect((state) => ({
  cartSize: state.cart.length,
}))(PayButton);
