import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import {formatPrice} from '../../util/format';

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

      const traditional = response.data.traditional.map((item) => ({
        ...item,
        priceFormatted: formatPrice(item.price),
      }));

      const custom = response.data.custom.map((item) => ({
        ...item,
        priceFormatted: formatPrice(item.price),
      }));

      this.setState({
        traditional: traditional,
        themed: custom,
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleNavigate = (item) => {
    const {navigation} = this.props;

    console.log(navigation);

    navigation.navigate('Cart', {item});
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
                <TitlePrice>{product.priceFormatted}</TitlePrice>
                <ButtonAdd>
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
                <TitlePrice>{item.priceFormatted}</TitlePrice>
                <ButtonAdd onPress={() => this.handleNavigate(item)}>
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
