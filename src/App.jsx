import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import route from './Router/Route'; //路由配置
import store from './Redux/Store/Store';

import './Style/css/AdminLTE.css';
import './Style/css/skins/_all-skins.css';

store.subscribe(() => { //监听state变化
    //console.log(store.getState())
});

render(
    <Provider store={store}>
        {route}
    </Provider>,
    document.body.appendChild(document.createElement('div'))
);

