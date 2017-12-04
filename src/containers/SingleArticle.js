import React, {Component} from 'react'

import CSS from '../css/components/blog.scss'

class Article extends Component {

  render() {
    const article = this.props.data.blog
    const image = article.hasOwnProperty('image') &&
      <img src={article.image} className={CSS.image} alt={`${article.title}`} />

    return (
      <div className="container">
        <h3 className={CSS.title}>{article.title}</h3>
        <div className={CSS.info}>
          <span className={CSS.author}>by {article.author}</span>
          <span className={CSS.date}>{article.published_at}</span>
        </div>
        {image}
        <div className={CSS.content} dangerouslySetInnerHTML={{__html: article.content}} />
      </div>
    )
  }
}

export default Article