import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CardActions from '../../store/modules/cart/actions';
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

function Cart({cart, removeFromCart, updateAmount}) {
  const cartSize = cart.length;

  function increment(product) {
    updateAmount(product.image, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.image, product.amount - 1);
  }

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
                    <ButtonSub onPress={() => decrement(product)}>
                      <Icon
                        name="remove-circle-outline"
                        size={25}
                        color="#7f5539"
                      />
                    </ButtonSub>

                    <Input readOnly value={String(product.amount)} />

                    <ButtonAdd onPress={() => increment(product)}>
                      <Icon
                        name="add-circle-outline"
                        size={25}
                        color="#7f5539"
                      />
                    </ButtonAdd>
                  </DetailsAddRemove>
                </DetailsProduct>

                <ButtonRemove onPress={() => removeFromCart(product.image)}>
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CardActions, dispatch);

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
