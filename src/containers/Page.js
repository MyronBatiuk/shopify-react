import React, {Component} from 'react'

import CSS from '../css/components/page.scss'

class Collection extends Component {

  render() {
    const {page} = this.props.data
    const title = page.title && <h1 className={CSS.title}>{page.title}</h1>
    const content = page.content && <div className={CSS.content} dangerouslySetInnerHTML={{__html: page.content}} />

    return (
      <div className="container">
        {title}
        {content}
      </div>
    )
  }
}

export default Collection