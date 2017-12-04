import React, {Component} from 'react'

import CSS from '../css/components/hero.scss'

class Hero extends Component {
  render() {
    const {data} = this.props
    const styles = {background: `url(${data.image}) no-repeat center`,}
    const heroSubtitle = data.text && <p className={CSS.subtitle}>{data.text}</p>
    return (
      <div className={CSS.section}>
        <div className={CSS.image} style={styles}>
          <div className={CSS.content}>
            <h2 className={CSS.title}>{data.title}</h2>
            {heroSubtitle}
          </div>
        </div>
      </div>
    )
  }
}

export default Hero