export const increment = ()=> {
    return {
        type: 'INCREMENT_COUNTER',
    }
};

export const decrement = ()=> {
    return {type: 'DECREMENT_COUNTER'}
};


export const rok = (index, json)=> {
    return {type: 'DECREMENT_COUNTER2',payload:json}
};

export const test = (index, length, tag)=> {
    return dispatch => {
        return fetch(`http://192.168.1.105:8080/ping`)
          .then(response => response.json())
          .then(json => dispatch(rok(index, json)))
      }
};
