import React, {Component} from 'react'
import vars from '../config/vars'

import CartItem from '../components/CartItem'

import CSS from '../css/components/cart.scss'

class Cart extends Component {

  componentDidMount() {
    this.props.checkCart()
  }

  openCheckout = (url) => {
    localStorage.removeItem('cart')
    window.location = url
  }

  renderContent = (cart) => {
    let subtotal = 0
    let checkoutUrl = vars.SITE_URL + '/cart/'
    const cartItems = Object.keys(cart.items).map(key => {
      subtotal += cart.items[key].quantity * cart.items[key].price
      checkoutUrl += key + ':' + cart.items[key].quantity + ','
      return <CartItem key={key} id={key} item={cart.items[key]} {...this.props} />
    })
    return (
      <div className={CSS.content}>
        <header className={CSS.header}>
          <h2>Your cart</h2>
        </header>
        <ul className={CSS.items}>
          {cartItems}
        </ul>
        <footer className={CSS.footer}>
          <div className={CSS.info}>
            <div className={CSS.subtotal}>Subtotal</div>
            <div className={CSS.subtotalPrice}>
              $ {subtotal}
            </div>
          </div>
          <button className={CSS.checkoutBtn} onClick={() => this.openCheckout(checkoutUrl)}>Checkout</button>
          <p className={CSS.addInfo}>Shipping & taxes calculated at checkout</p>
        </footer>
      </div>
    )
  }

  render() {
    const {cart} = this.props.data
    const content = Object.keys(cart.items).length > 0 ? this.renderContent(cart) :
      <p className={CSS.emptyCart}>Cart is empty</p>
    return (
      <div className={`${CSS.container} ${cart.open ? CSS.open : ''}`}>
        <div className={CSS.overlay} onClick={() => this.props.toggleCart()} />
        <div className={CSS.cart}>
          <button onClick={() => this.props.toggleCart()} className={CSS.close}>
            &#10006;
          </button>
          {content}
        </div>
      </div>
    )
  }
}

export default Cart
