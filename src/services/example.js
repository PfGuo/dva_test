import request from '../utils/request';

export async function querycountrank() {
  return request('/api/getcountrank');
}

export async function querysizerank() {
  return request('/api/getsizerank');
}

export async function querydetaillist() {
  return request('/api/getdetaillist');
}