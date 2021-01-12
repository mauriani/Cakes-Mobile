export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function removeFromCart(image) {
  return {
    type: '@cart/REMOVE',
    image,
  };
}

export function updateAmount(image, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    image,
    amount,
  };
}
