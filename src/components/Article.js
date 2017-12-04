import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import CSS from '../css/components/blog.scss'

class Article extends Component {

  render() {
    const {article} = this.props
    const image = article.hasOwnProperty('image') &&
      <Link to={`/blog/${article.handle}`}>
        <img src={article.image} className={CSS.image} alt={`${article.title}`} />
      </Link>
    return (
      <div className={CSS.article}>
        <Link to={`/blog/${article.handle}`}>
          <h3 className={CSS.title}>{article.title}</h3>
        </Link>
        <div className={CSS.info}>
          <span className={CSS.author}>by {article.author}</span>
          <span className={CSS.date}>{article.published_at}</span>
        </div>
        {image}
        <div className={CSS.content}>
          {article.excerpt}
        </div>
      </div>
    )
  }
}

export default Article