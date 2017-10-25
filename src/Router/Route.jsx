import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router';

import index from '../Page/index'; //首页
import search from '../Page/search'; //登录
class Roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

// const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const history = hashHistory;


const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={index} />//首页
            <Route path="index" component={index} />
            <Route path="search" component={search} /> //登录
            <Redirect from='*' to='index'  />
        </Route>
    </Router>
);

export default RouteConfig;