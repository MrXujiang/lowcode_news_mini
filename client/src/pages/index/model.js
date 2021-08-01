// src/pages/index/model

export default {
  namespace: 'users',
  state: {
    title: 'Hello World',
    userInfo: {
      shareId: 123
    }
  },

  effects: {},

  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
