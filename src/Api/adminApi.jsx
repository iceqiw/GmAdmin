import { target } from '../Config/Config'
import * as actions from '../Redux/Action/Index';

export const testAPI = () => {
    let url = target + 'abj/ping';
    return actions.getData(url, {}, {}, "GET_DATA_SUCCESS")
}

export const testAPI2 = () => {
    let url = target + 'abj/ping';
    return actions.getData(url, {}, {}, "22222")
}

export const testAPI3 = (susscee) => {
    let url = target + 'abj/ping';
    return actions.getData(url, {}, susscee, "22223")
}