import React, { Component } from 'react';
import MainPanel from '../Component/common/mainPanel';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as apis from '../Api/adminApi';

class indexPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    getInform = () => {
        this.props.test2()
    };

    getInform2 = () => {
        this.props.test3()
    };

    getInform3 = () => {
        this.props.test4(json => {
            console.log(json)
        })
    };

    componentWillMount() {
        this.props.test2()
    }

    render() {
        //从组件的props属性中导入四个方法和一个变量
        const {requestData,requestData2 } = this.props;
        return (
            <MainPanel title='index' >
                 Clicked: {requestData2} times
                 hello: {requestData.message} 
                <input type="button" onClick={this.getInform} className="btn btn-primary" value="search" />
                <input type="button" onClick={this.getInform2} className="btn btn-primary" value="search2" />
                <input type="button" onClick={this.getInform3} className="btn btn-primary" value="search3" />
           
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
        test2:bindActionCreators(apis.testAPI,dispatch),
        test3:bindActionCreators(apis.testAPI2,dispatch),
        test4:bindActionCreators(apis.testAPI3,dispatch)
    }
};

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(indexPage)

