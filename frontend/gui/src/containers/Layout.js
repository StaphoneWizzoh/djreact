import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout>
        <Header>
            <div className='logo' />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key='1'> nav 1</Menu.Item>
                <Menu.Item key='2'> nav 1</Menu.Item>
                <Menu.Item key='3'> nav 1</Menu.Item>    
            </Menu>    
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#ffff', padding: 24, minHeight: 200 }}>
                {props.children}
            </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>
            Ant Design
        </Footer>
    </Layout>
    );
}

export default CustomLayout;