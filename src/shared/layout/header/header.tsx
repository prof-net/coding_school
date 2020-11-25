import React from 'react';
import { Layout} from "antd";
import "./header.css";

const Header = () => (
    <div>
        <Layout.Header className='sch-app-header'>
            <span style={{fontSize: '21px', color: '#525672', lineHeight: '70px'}}>Главная</span>
        </Layout.Header>
    </div>

);

export default Header;