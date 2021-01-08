import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container,
  Title,
  CardProduct,
  Image,
  Details,
  TitleProduct,
  TitlePrice,
  ButtonAdd,
  ButtonAddText,
} from './styles';

export default class CakesTraditional extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      const response = await api.get('/cakesCustom');
      this.setState({products: response.data});
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const {products} = this.state;
    console.log('oi', products);
    return (
      <Container>
        <Title>Bolos Personalizados</Title>
        <ScrollView horizontal={true}>
          {products.map((product) => (
            <CardProduct key={String(product.id)}>
              <Image source={{uri: product.image}} resizeMode="cover" />
              <TitleProduct>{product.title}</TitleProduct>
              <Details>
                <TitlePrice>R$ {product.price}</TitlePrice>
                <ButtonAdd>
                  <ButtonAddText>Adicionar</ButtonAddText>
                  <Icon name="add-circle-outline" size={28} color="#774936" />
                </ButtonAdd>
              </Details>
            </CardProduct>
          ))}
        </ScrollView>
      </Container>
    );
  }
}
