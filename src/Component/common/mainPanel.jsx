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
        <Header title={this.props.title} />
          <SideBar menuKey={this.props.menuKey}  />
          <div className="content-wrapper">
            <section className="content-header">
              <h1>
                {this.props.title}
              </h1>
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