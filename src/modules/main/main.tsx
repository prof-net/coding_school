import React from 'react';
import { Layout } from 'antd';
import Content from "../../shared/layout/content/content";
import Footer from "../../shared/layout/footer/footer";
import Sidebar from "../../shared/layout/sidebar/sidebar";
import Header from "../../shared/layout/header/header";

function Main() {

    return (

        <Layout >
            <Sidebar />
            <Layout style={{ marginLeft: 240, minHeight: '100vh' }}>
                <Header />
                <Content />
                <Footer />
            </Layout>
        </Layout>

    );
}

export default Main;
