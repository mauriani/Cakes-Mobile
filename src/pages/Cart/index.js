import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import {
  Container,
  Products,
  ContainerProduct,
  Image,
  DetailsProduct,
  TitleProduct,
  ValueProduct,
  SubTotal,
  ButtonAdd,
  Input,
  ButtonSub,
  DetailsAddRemove,
  ButtonRemove,
  Total,
  Price,
  ButtonFinalizar,
  ButtonFinalizarText,
} from './styles';

const Cart = () => {
  return (
    <Container>
      <Header />
      <Products>
        <ContainerProduct>
          <Image
            source={{
              uri:
                'https://cdn.peoople.app/image/recommendation/2539343/2539343_240820143450_opt_520.jpg',
            }}
          />
          <DetailsProduct>
            <TitleProduct>Bolo de Cenoura</TitleProduct>
            <ValueProduct>Preço R$ 100,00</ValueProduct>
            <SubTotal>Subtotal R$ 100,00</SubTotal>

            <DetailsAddRemove>
              <ButtonAdd>
                <Icon name="remove-circle-outline" size={25} color="#7f5539" />
              </ButtonAdd>

              <Input readOnly value={'1'} />

              <ButtonSub>
                <Icon name="add-circle-outline" size={25} color="#7f5539" />
              </ButtonSub>
            </DetailsAddRemove>
          </DetailsProduct>

          <ButtonRemove>
            <Icon name="delete" size={28} color="#7f5539" />
          </ButtonRemove>
        </ContainerProduct>

        <Total>
          Total <Price>R$ 100,00</Price>
        </Total>
        <ButtonFinalizar>
          <ButtonFinalizarText>Finalizar Compra</ButtonFinalizarText>
        </ButtonFinalizar>
      </Products>
    </Container>
  );
};

export default Cart;
