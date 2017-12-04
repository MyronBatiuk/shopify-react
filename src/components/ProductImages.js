import React, {Component} from 'react'

import CSS from '../css/components/productImages.scss'

class ProductImages extends Component {

  changeFeaturedImage = (image) => {
    this.props.changeFeaturedImage(image)
  }

  render() {
    const {images} = this.props
    const imagesList = Object.keys(images).map(key => {
      return (
        <li className={CSS.image} key={key} onClick={() => this.changeFeaturedImage(images[key])}>
          <img src={images[key]} alt="" />
        </li>
      )
    })
    return (
      <ul className={CSS.imagesList}>
        {imagesList}
      </ul>
    )
  }
}

export default ProductImages