import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  CardProduct,
  Image,
  Details,
  TitleProduct,
  TitlePrice,
  ButtonAdd,
  ButtonAddText,
} from './styles';
import Header from '../../components/Header';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      const response = await api.get('/products');
      this.setState({products: response.data});
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    console.log(this.state.products);
    return (
      <Container>
        <CardProduct>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=335&q=80',
            }}
            resizeMode="cover"
          />

          <Details>
            <TitleProduct>
              Bolo de Chocolate com Recheio de Brigadeiro
            </TitleProduct>

            <TitlePrice>R$ 100,00</TitlePrice>
          </Details>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Details>
              <Icon name="star" size={25} color="#ff9e00" />
              <Icon name="star" size={25} color="#ff9e00" />
              <Icon name="star" size={25} color="#ff9e00" />
              <Icon name="star" size={25} color="#ff9e00" />
              <Icon name="star" size={25} color="#ff9e00" />
            </Details>

            <ButtonAdd>
              <ButtonAddText>ADD</ButtonAddText>
              <Icon name="add-circle-outline" size={28} color="#fff" />
            </ButtonAdd>
          </View>
        </CardProduct>
      </Container>
    );
  }
}
