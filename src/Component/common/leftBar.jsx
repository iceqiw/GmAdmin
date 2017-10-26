import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';



class SideBarMenuTree extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      _active: 0
    }
  }

  handleClick(index, e) {
    if (this.state._active == 0) {
      this.setState({ _active: 1 })
    } else {
      this.setState({ _active: 0 })
    }

  }

  render() {
    let { name } = this.props
    return (
      <li className={this.state._active == 0 ? "treeview" : "treeview active"} onClick={this.handleClick.bind(this)} >
        <a>
          <i className="fa fa-files-o"></i>
          <span>{name}</span>
        </a>
        <ul className="treeview-menu">
          {this.props.children}
        </ul>
      </li>
    )
  }
}

class SideBarMenu extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ul className="sidebar-menu">
        <li className="header">MAIN NAVIGATION</li>
        <SideBarMenuTree name='测试功能' >
          <li><Link to='/index'><span>首页</span></Link></li>
          <li><Link to='/search'><span>搜索</span></Link></li>
        </SideBarMenuTree>
        <SideBarMenuTree name='2222' >
          <li><a href="/search"><i className="fa fa-circle-o"></i> Boxed</a></li>
          <li><Link to='/searchs'><span>search</span></Link></li>
          <li><Link to='/login'><span>login</span></Link></li>
        </SideBarMenuTree>
      </ul>
    )
  }
}
/**
 * 公共menu
 *
 * @export
 * @className SideBar
 * @extends {Component}
 */
export class SideBar extends Component {  //头部标题
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <div className="user-panel">
            <div className="pull-left image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>后台管理系统</p>
              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                <button type='submit' name='search' id='search-btn' className="btn btn-flat"><i className="fa fa-search"></i></button>
              </span>
            </div>
          </form>
          <SideBarMenu />
        </section>
      </aside>
    );
  }
}

export default SideBar