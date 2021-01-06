import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
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
      const response = await api.get('products');
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
        <ScrollView>
          {products.map((product) => (
            <CardProduct key={String(product.id)}>
              <Image source={{uri: product.image}} resizeMode="cover" />

              <Details>
                <TitleProduct>{product.title}</TitleProduct>

                <TitlePrice>{product.price}</TitlePrice>
              </Details>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
          ))}
        </ScrollView>
      </Container>
    );
  }
}
