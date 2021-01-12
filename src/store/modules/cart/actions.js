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
