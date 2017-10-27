//手动获取数据
export const requestData = (state = {}, action = {}) => {
    switch(action.type){
        case "GET_DATA_SUCCESS":
            state=action.json
            return state;
        default:
            return state;
    }
}

export const requestData2 = (state = 0, action = {}) => {
    switch(action.type){
        case "22222":
            return state+1;
        default:
            return state;
    }
}