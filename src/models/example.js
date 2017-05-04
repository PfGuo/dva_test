import * as service from '../services/example'

export default {

  namespace: 'example',

  state: {
    countrankloading: true,
    sizerankloading: true,
    detaillistloading: true,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *getCountRank({ stime, etime, payload }, { call, put }) {  // eslint-disable-line
      const data = yield call(service.querycountrank, stime, etime);
      yield put({ type: 'getcountrank', payload: data.data });
    },

    *querySizeRank({ stime, etime, payload }, { call, put }) {  // eslint-disable-line
      const data = yield call(service.querysizerank, stime, etime);
      yield put({ type: 'querysizerank', payload: data.data });
    },

    *getDetailList({ stime, etime, payload }, { call, put }) {  // eslint-disable-line
      const data = yield call(service.querydetaillist, stime, etime);
      yield put({ type: 'querydetaillist', payload: data.data });
    },
  },

  reducers: {
    getcountrank(state, action) {
      return { ...state, countrank: action.payload, countrankloading: false };
    },

    querysizerank(state, action) {
      return { ...state, sizerank: action.payload, sizerankloading: false };
    },

    querydetaillist(state, action) {
      return { ...state, detaillist: action.payload, detaillistloading: false };
    }
  },

};
