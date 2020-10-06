import { Menu } from 'antd';
import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 'mail',
        };
        this.wrapper = React.createRef();
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({ active: e.key });
    };

    render() {
        const { active } = this.state;
        return (
            <div className="header">
                <Menu ref={this.wrapper} onClick={this.handleClick} selectedKeys={[active]} mode="horizontal">
                    <Menu.Item key="mail">Navigation One</Menu.Item>
                    <Menu.Item key="app">Navigation Two</Menu.Item>
                    <Menu.Item key="alipay">Navigation Four - Link</Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Header;