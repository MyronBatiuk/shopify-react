import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

import weatherActions from '../actions/weather-actions'

import CSS from '../css/components/home.scss'

class Home extends Component {
  static propTypes = {
    weather: PropTypes.object.isRequired,
    fetchWeather: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchWeather()
  }

  render() {
    const {city, temp} = this.props.weather
    return (
      <div>
        <p>This is Home component</p>
        <p>Grid example:</p>
        <Grid fluid>
          <Row>
            <Col xs={12} md={4}>
              <div className={CSS.box}>
                  Hello, world!
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className={CSS.box}>
                  Hello, world!
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className={CSS.box}>
                  Hello, world!
              </div>
            </Col>
          </Row>
        </Grid>
        <p>Temperature in {city} - {temp}</p>
      </div>
    )
  }
}

function mapStateToProps({weather}) {
  return {weather}
}

export default connect(mapStateToProps, weatherActions)(Home)
