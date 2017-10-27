import fetch from 'isomorphic-fetch'
import { Tool } from '../../Config/Tool'
import { hashHistory } from 'react-router';
//获取数据成功
export const getDataSuccess = (type, json, success) => {
    return {
        type,
        json,
        success
    }
}

//手动调用获取数据的aciton
export const getData = (path, urlData, success, type) => {
    let url = path + Tool.urlParam(urlData);
    return dispatch => {
        return fetch(url, {
            method: 'GET',
            credentials: 'include',
            mode: 'cors'
        }).then(response => {
            if (response.ok) {
                response.json().then(json => dispatch(getDataSuccess(type, json, success)))
            } else {
                hashHistory.push('index')
            }
        }).catch(error => console.log(error))
    }
}

//手动调用获取数据的aciton
export const formData = (url, data, success, type) => {
    return dispatch => {
        return fetch(url, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: Tool.formParam(data)
        }).then(response => {
            if (response.ok) {
                response.json().then(json => dispatch(getDataSuccess(type, json, success)))
            } else {
                hashHistory.push('index')
            }
        }).catch(error => console.log(error))
    }
}

export const postData = (url, data, success, type) => {
    return dispatch => {
        return fetch(url, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                response.json().then(json => dispatch(getDataSuccess(type, json, success)))
            } else {
                hashHistory.push('index')
            }
        }).catch(error => console.log(error))
    }
}

export const putData = (url, data, success, type) => {
    return dispatch => {
        return fetch(url, {
            method: 'PUT',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                response.json().then(json => dispatch(getDataSuccess(type, json, success)))
            } else {
                hashHistory.push('index')
            }
        }).catch(error => console.log(error))
    }
}

export const deleteData = (path, urlData, success, type) => {
    let url = path + Tool.urlParam(urlData);
    return dispatch => {
        return fetch(url, {
            method: 'DELETE',
            credentials: 'include',
            mode: 'cors'
        }).then(response => {
            if (response.ok) {
                response.json().then(json => dispatch(getDataSuccess(type, json, success)))
            } else {
                hashHistory.push('index')
            }
        }).catch(error => console.log(error))
    }
}

