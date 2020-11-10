import React from 'react';
import { Layout} from "antd";
import "./header.css";

const Header = (props:any) => (
    <Layout.Header className={'rr-app-header'}>
        <span style={{fontSize: '21px', color: '#525672', lineHeight: '70px'}}>Header</span>
    </Layout.Header>
);

export default Header;