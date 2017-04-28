import request from '../utils/request';

export async function querycountrank() {
  return request('/api/getcountrank');
}

export async function querysizerank() {
  return request('/api/getsizerank');
}

export async function querydetaillist(stime, etime) {
  return request('/api/getdetaillist?stime=' + stime + "&etime=" + etime, {
      headers: {
          'Cache-Control': 'no-cache',
          'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
      },
  });
}