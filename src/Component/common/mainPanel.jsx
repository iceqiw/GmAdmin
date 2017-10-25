import React, {Component} from 'react';
import Header from './header';
import SideBar from './leftBar';
/**
 * 公共区域
 *
 * @export
 * @className MainPanel
 * @extends {Component}
 */
export class MainPanel extends Component {  //头部标题
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header title='index' />
          <SideBar title='index' />
          <div className="content-wrapper">
            <section className="content-header">
              HOME
            </section>
            <section className="content">
              {this.props.children}
            </section>
          </div>
      </div>
    );
  }
}

export default MainPanel