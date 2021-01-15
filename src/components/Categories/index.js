import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import {formatPrice} from '../../util/format';
import * as CardActions from '../../store/modules/cart/actions';

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

class Categories extends Component {
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

      const data = response.data.map((item) => ({
        ...item,
        priceFormatted: formatPrice(item.price),
      }));
      // filtra bolos tradicionais
      const traditional = data.filter(
        (element) => element.category === 'traditional',
      );
      // filtra bolos temáticos
      const themed = data.filter((element) => element.category === 'themed');

      this.setState({
        data,
        traditional: traditional,
        themed: themed,
      });
    } catch (err) {
      console.error(err);
    }
  };

  handleAddProduct = (product) => {
    const {addToCart} = this.props;
    addToCart(product);
  };

  render() {
    const {traditional, themed} = this.state;

    return (
      <Container>
        <Title>Bolos Tradicionais</Title>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {traditional.map((product) => (
            <CardProduct key={product.id}>
              <Image source={{uri: product.image}} resizeMode="cover" />
              <TitleProduct>{product.title}</TitleProduct>
              <Details>
                <TitlePrice>{product.priceFormatted}</TitlePrice>
                <ButtonAdd onPress={() => this.handleAddProduct(product)}>
                  <ButtonAddText>Adicionar</ButtonAddText>
                  <Icon name="add-circle-outline" size={28} color="#774936" />
                </ButtonAdd>
              </Details>
            </CardProduct>
          ))}
        </ScrollView>

        <Title>Bolos Temáticos</Title>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {themed.map((product) => (
            <CardProduct key={product.id}>
              <Image source={{uri: product.image}} resizeMode="cover" />
              <TitleProduct>{product.title}</TitleProduct>
              <Details>
                <TitlePrice>{product.priceFormatted}</TitlePrice>
                <ButtonAdd onPress={() => this.handleAddProduct(product)}>
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CardActions, dispatch);

export default connect(null, mapDispatchToProps)(Categories);
