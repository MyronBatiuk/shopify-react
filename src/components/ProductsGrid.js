import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Grid, Row, Col} from 'react-flexbox-grid'

import CSS from '../css/components/productsGrid.scss'

class ProductsGrid extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const {data} = this.props
    const cols = Object.keys(data).map(key => (
      <Col key={key} xs={12} md={3}>
        <Link to={`/products/${data[key].handle}`} className={CSS.box}>
          <img src={data[key].featured_image} alt={data[key].title} className={CSS.image} />
          <h3 className={CSS.title}>{data[key].title}</h3>
          <span className={CSS.price}>{data[key].price}</span>
        </Link>
      </Col>
    ))
    return (
      <Grid fluid>
        <Row>
          {cols}
        </Row>
      </Grid>
    )
  }
}

export default ProductsGrid