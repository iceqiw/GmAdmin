import React, { Component } from 'react';
import MainPanel from '../Component/common/mainPanel';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../Redux/Action';
import fetch from 'isomorphic-fetch'

class indexPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.getInform = () => {
            console.log(this.props.counter)
            fetch("127.0.0.1", {
                method: 'GET',
                credentials: 'include',
                mode: 'cors'
            }).then(response =>this.props.decrement(123))
            .catch(error => this.props.increment(123))
        };
    }
    render() {
        //从组件的props属性中导入四个方法和一个变量
        const { increment, decrement, counter } = this.props;
        return (
            <MainPanel title='index' >
                Clicked: {counter} times
                {' '}
                <button onClick={increment}>+</button>
                {' '}
                <button onClick={decrement}>-</button>
                {' '}
                <input type="button" onClick={this.getInform} className="btn btn-primary" value="search" />
            </MainPanel>
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
        decrement:bindActionCreators(actions.decrement,dispatch)
    }
};

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(indexPage)

