import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, IndexLink } from 'react-router';
import { bindActionCreators } from 'redux'
import * as actions from '../Redux/Action';
class loginPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        //从组件的props属性中导入四个方法和一个变量
        const { increment, decrement, counter } = this.props;
        return (
            <div><IndexLink  to='/'><span>首页</span></IndexLink ></div>
        );
    }

};

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment:bindActionCreators(actions.increment,dispatch),
        decrement:bindActionCreators(actions.decrement,dispatch),
        test2:bindActionCreators(actions.test,dispatch)
    }
};

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(loginPage)

