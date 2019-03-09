import fetch from 'utils/fetch';

export function page(query) {
  return fetch({
    url: '/groupType/page',
    method: 'get',
    params: query
  });
}

export function addObj(obj) {
  return fetch({
    url: '/groupType',
    method: 'post',
    data: obj
  });
}

export function getObj(id) {
  return fetch({
    url: '/groupType/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return fetch({
    url: '/groupType/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return fetch({
    url: '/groupType/' + id,
    method: 'put',
    data: obj
  })
}
