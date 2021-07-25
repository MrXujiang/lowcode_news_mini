// src/pages/index/model

export default {
  namespace: 'users',
  state: {
    title: 'Hello World'
  },

  effects: {},

  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
