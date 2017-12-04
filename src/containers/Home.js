import React, {Component} from 'react'

import ProductsGrid from '../components/ProductsGrid'
import Hero from '../components/Hero'

class Home extends Component {

  render() {
    const {home} = this.props.data
    const hero = home.hero && <Hero data={home.hero} />
    const products = Object.keys(home.products).length !== 0 && <ProductsGrid data={home.products} />
    return (
      <div>
        {hero}
        <div className="container">
          <h1>This is Home collection</h1>
          {products}
        </div>
      </div>
    )
  }
}

export default Home