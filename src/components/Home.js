import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import weatherActions from '../actions/weather-actions';

class Home extends Component {
  static propTypes = {
    weather: PropTypes.object.isRequired,
    fetchWeather: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchWeather();
  }

  render() {
    const {city, temp} = this.props.weather;
    return (
        <div>
          <p>This is Home component</p>
          <p>Temperature in {city} - {temp}</p>
        </div>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps, weatherActions)(Home);
