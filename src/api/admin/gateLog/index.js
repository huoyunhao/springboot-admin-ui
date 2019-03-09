import fetch from 'utils/fetch';

export function page(query) {
    return fetch({
        url: '/gateLog/page',
        method: 'get',
        params: query
    });
}

export function addObj(obj) {
    return fetch({
        url: '/gateLog',
        method: 'post',
        data: obj
    });
}

export function getObj(id) {
    return fetch({
        url: '/gateLog/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return fetch({
        url: '/gateLog/' + id,
        method: 'delete'
    })
}

export function putObj(id, obj) {
    return fetch({
        url: '/gateLog/' + id,
        method: 'put',
        data: obj
    })
}
