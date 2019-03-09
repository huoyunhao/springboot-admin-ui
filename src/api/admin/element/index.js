import fetch from 'utils/fetch';

export function page(query) {
  return fetch({
    url: '/element/list',
    method: 'get',
    params: query
  });
}

export function addObj(obj) {
  return fetch({
    url: '/element',
    method: 'post',
    data: obj
  });
}

export function getObj(id) {
  return fetch({
    url: '/element/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return fetch({
    url: '/element/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return fetch({
    url: '/element/' + id,
    method: 'put',
    data: obj
  })
}
