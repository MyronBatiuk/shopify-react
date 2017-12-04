import React, {Component} from 'react'

import CSS from '../css/components/cart.scss'

class LineItem extends Component {

  render() {
    const {item, id, removeItemFromCart, decrementQuantity, incrementQuantity} = this.props
    const variant = item.option !== 'Title' && item.option + ' / ' + item.variant
    const image = item.image && <img src={item.image} alt={`${item.title} product shot`} />
    return (
      <li className={CSS.item}>
        <div className={CSS.image}>
          {image}
        </div>
        <div className={CSS.itemContent}>
          <button className={CSS.removeBtn} onClick={() => removeItemFromCart(id)}>×</button>
          <div className={CSS.row}>
            <div className={CSS.option}>
              {variant}
            </div>
            <span className={CSS.title}>
              {item.title}
            </span>
          </div>
          <div className={CSS.row}>
            <div className={CSS.wrapper}>
              <button className={CSS.updateQuantityBtn} onClick={() => decrementQuantity(id, item.quantity)}>-</button>
              <span className={CSS.quantity}>{item.quantity}</span>
              <button className={CSS.updateQuantityBtn} onClick={() => incrementQuantity(id)}>+</button>
            </div>
            <span className={CSS.price}>$ {(item.quantity * item.price).toFixed(2)}</span>
          </div>
        </div>
      </li>
    )
  }
}

export default LineItem
