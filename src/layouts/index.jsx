import { useEffect } from 'react';
import { Layout } from 'antd';
import request from '../utils/request';
import './index.less';
import axios from 'axios';

const { Header, Content, Footer, Sider } = Layout;


export default (props) => {
    useEffect(() => {
        // request('/api/v1/ads').then((res) => {
        //     console.log(res);
        // });
        axios({
            url: 'http://localhost:2000/api/v1/ads',
            method: 'get',
            withCredentials: true
        }).then(res => {
            console.log(res);
        });
    }, []);
    return (
        <Layout className="main-layout">
            <Sider className="side-layout">
                <div className="logo" />
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content className="content-layout">
                    {props.children}
                </Content>
                <Footer className="footer-layout">
                    Ibadgers ©2023 11 Created by Lee
                </Footer>
            </Layout>
        </Layout>
    );
};
