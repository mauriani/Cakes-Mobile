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
  SubTotalPriceBold,
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
import {formatPrice} from '../../util/format';

function Cart({cart, removeFromCart, updateAmount, total}) {
  const cartSize = cart.length;

  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
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
                  <ValueProduct>{product.priceFormatted}</ValueProduct>
                  <SubTotal>
                    Subtotal{' '}
                    <SubTotalPriceBold>{product.subtotal}</SubTotalPriceBold>
                  </SubTotal>

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

                <ButtonRemove onPress={() => removeFromCart(product.id)}>
                  <Icon name="delete" size={28} color="#7f5539" />
                </ButtonRemove>
              </ContainerProduct>
            ))}

            <Total>
              Total <Price>{total}</Price>
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
  cart: state.cart.map((product) => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
