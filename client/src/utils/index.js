import getColor from './getColor'
import getElementsSite from './getElementsSite '
import http from './http'

const formatNumber = (num) => {
  // num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' :  目前用不到千分位转换
  return num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
}

export {
  formatNumber,
  getColor,
  getElementsSite,
  http
}
