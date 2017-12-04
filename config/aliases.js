/* eslint no-undef: 0 */

const path = require('path')

module.exports = {
  Actions: path.resolve(__dirname, '../src/actions'),
  Components: path.resolve(__dirname, '../src/components'),
  Config: path.resolve(__dirname, '../src/config'),
  Containers: path.resolve(__dirname, '../src/containers'),
  SCSS: path.resolve(__dirname, '../src/css'),
  // Support React Native Web
  // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
  'react-native': 'react-native-web',
}