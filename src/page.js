import React from 'react'
import SiderBar from './components/sider.js';
import HeaderMenu from './components/header.js';
import logo from './logo.svg';

import { Menu } from 'antd';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default function Page() {
    const handleClickBottom = e => {
        console.log('click ', e);
    };

    return (
        <div className="page">
            <Layout>
                <Sider
                    style={{
                        height: '100vh',
                        position: 'fixed',
                        left: 0
                    }}
                >
                    <div className="logo">
                        <a href="/" >
                            <img src={logo} alt="test" />
                        </a>
                    </div>
                    <SiderBar />
                    <div className="aside-footer" >
                        <Menu onClick={handleClickBottom} mode="horizontal">
                            <Menu.Item key="mail">Agilo.com</Menu.Item>
                            <Menu.Item key="app">Glossary</Menu.Item>
                            <Menu.Item key="alipay">Dashboard</Menu.Item>
                        </Menu>
                    </div>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 400 }}>
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <HeaderMenu />
                    </Header>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                            content
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam architecto facere obcaecati quis ducimus, earum praesentium eius dicta iure voluptatem voluptates autem modi et fugit dignissimos, id voluptatum, alias aut!
        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </div>
    )
}
