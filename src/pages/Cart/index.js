import React from 'react';
import {connect} from 'react-redux';
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
  ContainerCart,
  ContainerCartTitulo,
} from './styles';

function Cart({cart, dispatch}) {
  const cartSize = cart.length;

  console.log(cartSize);
  return (
    <Container>
      <Header />
      {cartSize > 0 ? (
        <>
          <Products>
            {cart.map((product) => (
              <ContainerProduct key={product.id}>
                <Image
                  source={{
                    uri: product.image,
                  }}
                />
                <DetailsProduct>
                  <TitleProduct>{product.title}</TitleProduct>
                  <ValueProduct>{product.title}</ValueProduct>
                  <SubTotal>{product.price}</SubTotal>

                  <DetailsAddRemove>
                    <ButtonAdd>
                      <Icon
                        name="remove-circle-outline"
                        size={25}
                        color="#7f5539"
                      />
                    </ButtonAdd>

                    <Input readOnly value={'1'} />

                    <ButtonSub>
                      <Icon
                        name="add-circle-outline"
                        size={25}
                        color="#7f5539"
                      />
                    </ButtonSub>
                  </DetailsAddRemove>
                </DetailsProduct>

                <ButtonRemove
                  onPress={() =>
                    dispatch({type: 'REMOVE_FROM_CART', image: product.image})
                  }>
                  <Icon name="delete" size={28} color="#7f5539" />
                </ButtonRemove>
              </ContainerProduct>
            ))}

            <Total>
              Total <Price>R$ 100,00</Price>
            </Total>
            <ButtonFinalizar>
              <ButtonFinalizarText>Finalizar Compra</ButtonFinalizarText>
            </ButtonFinalizar>
          </Products>
        </>
      ) : (
        <>
          <ContainerCart>
            <ContainerCartTitulo>
              Opss... seu carrinho está vazio !
            </ContainerCartTitulo>

            <Icon name="shopping-cart" size={30} color="#7f5539" />
          </ContainerCart>
        </>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
