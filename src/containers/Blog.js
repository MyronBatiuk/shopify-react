import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import ReactPaginate from 'react-paginate'

import Article from '../components/Article'

import CSS from '../css/components/blog.scss'

class Blog extends Component {

  changePage = ({selected}) => {
    const {history, location} = this.props
    const page = selected !== 0 ? `?page=${selected + 1}` : ''
    history.push(location.pathname + page)
  }

  render() {
    let {articles, title, pages, current_page} = this.props.data.blog
    articles = Object.keys(articles).length > 0 ? Object.keys(articles).map(key => (
      <Article key={key} article={articles[key]} />
    )) : <p>No articles found</p>
    title = title && <h1 className={CSS.title}>{title}</h1>
    return (
      <div className="container">
        <div className={CSS.content}>
          {title}
          {articles}
          {pages > 1 &&
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={<a href="#">...</a>}
            pageCount={pages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={this.changePage}
            containerClassName={'pagination'}
            activeClassName={'active'}
            forcePage={current_page - 1}
          />}
        </div>
      </div>
    )
  }
}

export default withRouter(Blog)