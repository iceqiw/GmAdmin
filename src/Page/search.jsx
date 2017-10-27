import React, { Component } from 'react';
import MainPanel from '../Component/common/mainPanel';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../Redux/Action/Index';

class searchPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    getInform = () => {
        console.log(1)
        
    };

    render() {
        //从组件的props属性中导入四个方法和一个变量
        const { increment, decrement, counter } = this.props;
        return (
            <MainPanel title='search' >
            </MainPanel>
        );
    }

};

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    return {
       
    }
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
};

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(searchPage)

