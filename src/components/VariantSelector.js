import React, {Component} from 'react'

import CSS from '../css/components/productVariantSelector.scss'

class VariantSelector extends Component {

  logChange = (e) => {
    const id = parseInt(e.target.value, 10)
    const {price, compare_at_price} = this.props.variants[id]
    this.props.changeVariant(id, price, compare_at_price)
  }

  render() {
    const {variants} = this.props
    const options = Object.keys(variants).map(key =>
      <option value={variants[key].id} key={variants[key].id}>{variants[key].title}</option>,
    )
    return (
      <select className={CSS.variants} onChange={this.logChange}>
        {options}
      </select>
    )
  }
}

export default VariantSelector
