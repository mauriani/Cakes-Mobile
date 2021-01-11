import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

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

export default class Categories extends Component {
  state = {
    traditional: [],
    themed: [],
  };

  componentDidMount() {
    this.loadingProducts();
  }

  loadingProducts = async () => {
    try {
      const response = await api.get('/products');

      this.setState({
        traditional: response.data.traditional,
        themed: response.data.custom,
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleAddProduct = (id) => {
    const navigation = this.props;

    navigation.navigate('/cart', {
      id: id,
    });
  };

  render() {
    const {traditional, themed} = this.state;

    return (
      <Container>
        <Title>Bolos Tradicionais</Title>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {traditional.map((product) => (
            <CardProduct key={String(product.id)}>
              <Image source={{uri: product.image}} resizeMode="cover" />
              <TitleProduct>{product.title}</TitleProduct>
              <Details>
                <TitlePrice>R$ {product.price}</TitlePrice>
                <ButtonAdd onPress={() => this.handleAddProduct(product.id)}>
                  <ButtonAddText>Adicionar</ButtonAddText>
                  <Icon name="add-circle-outline" size={28} color="#774936" />
                </ButtonAdd>
              </Details>
            </CardProduct>
          ))}
        </ScrollView>

        <Title>Bolos Temáticos</Title>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {themed.map((item) => (
            <CardProduct key={String(item.id)}>
              <Image source={{uri: item.image}} resizeMode="cover" />
              <TitleProduct>{item.title}</TitleProduct>
              <Details>
                <TitlePrice>R$ {item.price}</TitlePrice>
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
