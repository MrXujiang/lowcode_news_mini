import config from './config'
import getColor from './getColor'
import getElementsSite from './getElementsSite '
import http from './http'
import withShare from './withShare'

const formatNumber = (num) => {
  // num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' :  目前用不到千分位转换
  return num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
}

export {
  config,
  formatNumber,
  getColor,
  getElementsSite,
  http,
  withShare
}
