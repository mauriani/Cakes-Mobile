import React, {Component} from 'react';
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
        <Header />
        <CardProduct>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            }}
            resizeMode="cover"
          />

          <Details>
            <TitleProduct>
              Bolo de Chocolate com Recheio de Brigadeiro
            </TitleProduct>

            <TitlePrice>R$ 100,00</TitlePrice>
          </Details>

          <ButtonAdd>
            <ButtonAddText>ADICIONAR</ButtonAddText>
          </ButtonAdd>
        </CardProduct>
      </Container>
    );
  }
}
