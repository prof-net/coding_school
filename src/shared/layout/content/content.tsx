import React from 'react';
import {Layout} from "antd";
import "./content.less";
import DashBoard from "../../../modules/main/modules/dashboard/dashboard";
import Admin from "../../../modules/main/admin/admin";
import { Route } from 'react-router-dom';

const Content = () => (
    <Layout.Content className={'rr-app-content'}>

        <Route exact path='/' component={()=><DashBoard />}/>
        <Route exact path='/admin' component={()=><Admin />}/>


    </Layout.Content>
);

export default Content;