import React, { Component } from 'react';
import MainPanel from '../Component/common/mainPanel';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../Api/adminApi';

class indexPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    getInform = () => {
        console.log(1)
        this.props.test2()
        this.props.test3()
    };

    render() {
        //从组件的props属性中导入四个方法和一个变量
        const {requestData,requestData2 } = this.props;
        return (
            <MainPanel title='index' >
                 Clicked: {requestData2} times
                 hello: {requestData.message} 
                <input type="button" onClick={this.getInform} className="btn btn-primary" value="search" />
            </MainPanel>
        );
    }

};

//将state.counter绑定到props的counter
const mapStateToProps = (state) => {
    return {
        requestData2: state.requestData2,
        requestData: state.requestData
    }
};
//将action的所有方法绑定到props上
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        test2:bindActionCreators(actions.testAPI,dispatch),
        test3:bindActionCreators(actions.testAPI2,dispatch)
    }
};

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(indexPage)

