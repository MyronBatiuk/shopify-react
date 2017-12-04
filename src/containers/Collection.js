import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import ProductsGrid from '../components/ProductsGrid'
import Hero from '../components/Hero'

class Collection extends Component {

  changePage = ({selected}) => {
    const {history, location} = this.props
    const page = selected !== 0 ? `?page=${selected + 1}` : ''
    history.push(location.pathname + page)
  }

  render() {
    const {collection} = this.props.data
    const hero = collection.hero && <Hero data={collection.hero} />
    const products = Object.keys(collection.products).length !== 0 && <ProductsGrid data={collection.products} />
    return (
      <div>
        {hero}
        <div className="container">
          <h1>This is {collection.title} collection</h1>
          {products}
          {collection.pages > 1 &&
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={<a href="#">...</a>}
            pageCount={collection.pages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={this.changePage}
            containerClassName={'pagination'}
            activeClassName={'active'}
            forcePage={collection.current_page - 1}
          />}
        </div>
      </div>
    )
  }
}

export default withRouter(Collection)