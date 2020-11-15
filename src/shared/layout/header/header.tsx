import React from 'react';
import { Layout} from "antd";
import "./header.css";

const Header = () => (
    <Layout.Header className={'rr-app-header'}>
        <span style={{fontSize: '21px', color: '#525672', lineHeight: '70px'}}>Главная</span>
    </Layout.Header>
);

export default Header;