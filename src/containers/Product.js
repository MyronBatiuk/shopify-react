import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-flexbox-grid'

import VariantSelector from '../components/VariantSelector'
import ProductImages from '../components/ProductImages'

import CSS from '../css/components/product.scss'

class Product extends Component {

  addVariantToCart = () => {
    const {product} = this.props.data
    const item = {
      id: product.selected_variant,
      title: product.title,
      image: product.featured_image,
      price: product.variants[product.selected_variant].price,
      quantity: product.selected_quantity,
      option: product.options[0],
      variant: product.variants[product.selected_variant].title,
    }
    this.props.addVariantToCart(item)
  }
  changeQuantity = (e) => {
    const quantity = parseInt(e.target.value, 10)
    this.props.changeQuantity(quantity)
  }

  renderContent = (product) => {
    const variantSelectors = <VariantSelector variants={product.variants} changeVariant={this.props.changeVariant} />
    const productImages = Object.keys(product.product_images).length > 1 &&
      <ProductImages images={product.product_images} changeFeaturedImage={this.props.changeFeaturedImage} />
    const comparePrice = product.selected_compare_price &&
      <span className={CSS.comparePrice}> - {product.currency + product.selected_compare_price}</span>
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={6}>
            <img className={CSS.image} src={product.featured_image} alt={product.title} />
            {productImages}
          </Col>
          <Col xs={12} md={6}>
            <h1 className={CSS.title}>{product.title}</h1>
            <span className={CSS.price}>{product.currency + product.selected_price}</span>
            {comparePrice}
            <p className={CSS.description} dangerouslySetInnerHTML={{__html: product.content}} />
            {variantSelectors}
            <label className={CSS.quantity}>
              Quantity
              <input min="1" type="number" defaultValue="1" onChange={this.changeQuantity} />
            </label>
            <button className={CSS.button} onClick={this.addVariantToCart}>Add to Cart</button>
          </Col>
        </Row>
      </Grid>
    )
  }

  render() {
    const {product} = this.props.data
    const content = product.variants && this.renderContent(product)
    return (
      <div className="container">
        <div className={CSS.content}>
          {content}
        </div>
      </div>
    )
  }
}

export default Product