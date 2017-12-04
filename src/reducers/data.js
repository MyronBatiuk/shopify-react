import constants from '../constants'

const initialState = {
  home: {
    hero: null,
    products: {},
  },
  header: {
    shop_name: null,
    logo_src: null,
  },
  collection: {
    hero: null,
    products: {},
  },
  page: {
    title: null,
    content: null,
  },
  product: {
    variants: null,
    product_images: {},
    selected_compare_price: null,
  },
  blog: {
    title: null,
    articles: {},
  },
  cart: {
    items: {},
    open: false,
  },
  products: null,
}

export default (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
    case constants.DATA.GET_ALL:
      const productsArray = Object.assign([], state.products)
      const products = action.payload['products']
      Object.keys(products).map(key =>
        productsArray.push(products[key]),
      )
      return {...state, products: productsArray}
    case constants.DATA.GET_HEADER:
      return {...state, header: action.payload}
    case constants.DATA.GET_HOME:
      return {...state, home: action.payload}
    case constants.DATA.GET_COLLECTION:
      return {...state, collection: action.payload}
    case constants.DATA.GET_PAGE:
      return {...state, page: action.payload}
    case constants.DATA.GET_BLOG:
      return {...state, blog: action.payload}
    case constants.DATA.GET_PRODUCT:
      return {...state, product: action.payload}
    case constants.PRODUCT.CHANGE_FEATURED_IMAGE:
      return {...state, product: {...state.product, featured_image: action.payload}}
    case constants.PRODUCT.CHANGE_QUANTITY:
      return {...state, product: {...state.product, selected_quantity: action.payload}}
    case constants.PRODUCT.CHANGE_VARIANT:
      return {
        ...state,
        product: {
          ...state.product,
          selected_variant: action.payload.id,
          selected_price: action.payload.price,
          selected_compare_price: action.payload.comparePrice,
        },
      }
    case constants.CART.SET_CART:
      return {...state, cart: action.payload}
    case constants.PRODUCT.ADD_TO_CART:
      if (action.payload.id in newState.cart.items) {
        newState.cart.items[action.payload.id].quantity += action.payload.quantity
      } else {
        newState.cart.items[action.payload.id] = action.payload
      }
      localStorage.setItem('cart', JSON.stringify(newState.cart))
      newState.cart.open = true
      return newState
    case constants.CART.TOGGLE :
      return {...state, cart: {...state.cart, open: !state.cart.open}}
    case constants.CART.DECREMENT_QUANTITY:
      const quantity = action.payload.quantity
      const newQuantity = quantity > 1 ? quantity - 1 : quantity
      newState.cart.items[action.payload.id].quantity = newQuantity
      localStorage.setItem('cart', JSON.stringify(newState.cart))
      return newState
    case constants.CART.INCREMENT_QUANTITY:
      newState.cart.items[action.payload].quantity += 1
      localStorage.setItem('cart', JSON.stringify(newState.cart))
      return newState
    case constants.CART.REMOVE_ITEM:
      delete newState.cart.items[action.payload]
      localStorage.setItem('cart', JSON.stringify(newState.cart))
      return newState
    default:
      return state
  }
}
