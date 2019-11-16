export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItems = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItems)  {
    return cartItems.map( cartItem =>
      cartItem.id === cartItemToAdd.id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem )
  }
  // cartItems is an array of objects, we modify one of these objects inside it( by adding a quantity key)
  return [...cartItems, { ...cartItemToAdd, quantity: 1} ]
} 
