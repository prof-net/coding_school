import React from 'react';
import {Layout} from "antd";
import "./content.less";
import DashBoard from "../../../modules/main/modules/dashboard/dashboard";

const Content = () => (
    <Layout.Content className={'rr-app-content'}>
        <DashBoard />
    </Layout.Content>
);

export default Content;