import Taro from '@tarojs/taro'

/**
 * 获取元素位置
 * @param {*} elements 需要查找的元素的名称(类名、id)
 * @returns 查找元素的位置的集合，传入字符串则为对象，传入数组，则为数组
 */
export default function getElementsSite (elements) {
  const query = Taro.createSelectorQuery()
  if (typeof elements === 'string') {
    // 查找单个DOM
    query.select(elements).boundingClientRect()
  } else if (typeof elements === 'object') {
    // 查找多个DOM
    for (const key of elements) {
      query.select(key).boundingClientRect()
    }
  }

  return new Promise((resolve, reject) => {
    query.exec(res => {
      resolve(res)
    })
  })
}
