import constants from '../constants'
import vars from '../config/vars'
import axios from 'axios'

const fetchData = (url, type) => {
  const request = axios.get(url)
  return request.then(({data}) => {
    let object = data
    object = object.substr(0, object.indexOf('end-' + type + '-object'))
    object = object.split('start-' + type + '-object')[1]
    object = JSON.parse(object)
    object = object[0]
    return object
  })
    .catch(() => {
      window.location = '/not-found'
    })
}

const detectType = (handle) => {
  let type
  if (handle.includes('pages'))
    type = 'GET_PAGE'
  if (handle.includes('collections'))
    type = 'GET_COLLECTION'
  if (handle.includes('products'))
    type = 'GET_PRODUCT'
  if (handle.includes('blog'))
    type = 'GET_BLOG'
  if (handle.includes('header'))
    type = 'GET_HEADER'
  if (handle.includes('home'))
    type = 'GET_HOME'
  if (handle.includes('all'))
    type = 'GET_ALL'
  if (handle.includes('search'))
    type = 'GET_SEARCH'
  return type
}

export default {
  // Fetching data from the Shopify store. We are not using API, we are deduce needed objects in Shopify store front
  // templates, then we get the html code of the needed page, parse it and get the needed object.
  fetchData: (handle, page) => (dispatch) => {
    handle = handle.replace('blog','blogs')
    let type = detectType(handle)
    let url = vars.SITE_URL + handle
    url = (type === constants.DATA.GET_SEARCH || type === constants.DATA.GET_BLOG ||
      type === constants.DATA.GET_ARTICLE) ? handle : url
    url = page ? `${url}?page=${page}` : url
    let request = fetchData(url, type)
    request.then((object) => {
      dispatch({
        type: type,
        payload: object,
      })
      if (type === constants.DATA.GET_ALL) {
        while (object['pages'] > page) {
          url = `${url.split('=')[0]}=${page + 1}`
          request = fetchData(url, type)
          request.then((object) => {
            dispatch({
              type: type,
              payload: object,
            })
          })
          page++
        }
      }
    })
  },
  changeFeaturedImage: (image) => (dispatch) => {
    dispatch({
      type: constants.PRODUCT.CHANGE_FEATURED_IMAGE,
      payload: image,
    })
  },
  changeQuantity: (quantity) => (dispatch) => {
    dispatch({
      type: constants.PRODUCT.CHANGE_QUANTITY,
      payload: quantity,
    })
  },
  changeVariant: (id, price, comparePrice) => (dispatch) => {
    dispatch({
      type: constants.PRODUCT.CHANGE_VARIANT,
      payload: {
        id,
        price,
        comparePrice,
      },
    })
  },
  addVariantToCart: (product) => (dispatch) => {
    dispatch({
      type: constants.PRODUCT.ADD_TO_CART,
      payload: product,
    })
  },
  checkCart: () => (dispatch) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (cart)
      dispatch({
        type: constants.CART.SET_CART,
        payload: cart,
      })
  },
  toggleCart: () => (dispatch) => {
    dispatch({
      type: constants.CART.TOGGLE,
    })
  },
  decrementQuantity: (id, quantity) => (dispatch) => {
    dispatch({
      type: constants.CART.DECREMENT_QUANTITY,
      payload: {
        id,
        quantity,
      },
    })
  },
  incrementQuantity: (id) => (dispatch) => {
    dispatch({
      type: constants.CART.INCREMENT_QUANTITY,
      payload: id,
    })
  },
  removeItemFromCart: (id) => (dispatch) => {
    dispatch({
      type: constants.CART.REMOVE_ITEM,
      payload: id,
    })
  },
}