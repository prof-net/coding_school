import React from 'react';
import './sidebar.css';
import {Avatar, Layout, Menu} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import {
    IconBell,
    IconTachometerAltSolid
} from "../../../components/icons";

const Sidebar = () => {
    return (
        <Layout.Sider
            style={{ height: '100vh', position: 'fixed', left: 0, background: '#383f77' }}
            width={240}
            breakpoint="md"
            collapsedWidth={80}
            collapsed={false}
        >
            <div className={'sch-sidebar'} style={{}}>
                <div style={{flexGrow: 1}}>

                    <div className={'sch-menu-logo-container'}>
                        <h2>Школа</h2>
                    </div>

                    <Menu mode={'inline'} className={'sch-sidebar-menu'} style={{ marginTop: '20px'}}>
                        <Menu.Item key="1" className={'sch-sidebar-menu-item-2'}>
                            <div className={'sch-sidebar-menu-item'}>
                                <Icon className={'sch-sidebar-menu-item-icon'} component={IconTachometerAltSolid} />
                                <span className={'sch-sidebar-menu-item-span'} >Главная</span>
                            </div>
                        </Menu.Item>
                        {/*<Menu.Item key="2">*/}
                        {/*    <div className={'sch-sidebar-menu-item'}>*/}
                        {/*        <Icon className={'sch-sidebar-menu-item-icon'} component={IconSitemap} />*/}
                        {/*        <span className={'sch-sidebar-menu-item-span'}>Все уроки</span>*/}
                        {/*    </div>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item key="3">*/}
                        {/*    <div className={'sch-sidebar-menu-item'}>*/}
                        {/*        <Icon className={'sch-sidebar-menu-item-icon'} component={IconBriefcase} />*/}
                        {/*        <span className={'sch-sidebar-menu-item-span'}>Плэйлисты</span>*/}
                        {/*    </div>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item key="4">*/}
                        {/*    <div className={'sch-sidebar-menu-item'}>*/}
                        {/*        <Icon className={'sch-sidebar-menu-item-icon'} component={IconBullhorn} />*/}
                        {/*        <span className={'sch-sidebar-menu-item-span'}>Советы</span>*/}
                        {/*    </div>*/}
                        {/*</Menu.Item>*/}
                        {/*<Menu.Item key="5">*/}
                        {/*    <div className={'sch-sidebar-menu-item'}>*/}
                        {/*        <Icon className={'sch-sidebar-menu-item-icon'} component={IconCalendar} />*/}
                        {/*        <span className={'sch-sidebar-menu-item-span'}>Новости</span>*/}
                        {/*    </div>*/}
                        {/*</Menu.Item>*/}
                    </Menu>

                </div>


                <div style={{flexGrow: 0}}>
                    {/*<Menu mode={'inline'} inlineIndent={18} className={'sch-sidebar-menu'}>*/}
                    {/*    <Menu.Item key="4">*/}
                    {/*        <div className={'sch-sidebar-menu-item'}>*/}
                    {/*            <Icon className={'sch-sidebar-menu-item-icon'}  component={IconCogSolid} />*/}
                    {/*            <span className={'sch-sidebar-menu-item-span'}>Настройки</span>*/}
                    {/*        </div>*/}
                    {/*    </Menu.Item>*/}
                    {/*    <Menu.Item key="5">*/}
                    {/*        <div className={'sch-sidebar-menu-item'}>*/}
                    {/*            <Icon className={'sch-sidebar-menu-item-icon'}  component={IconBullhorn} />*/}
                    {/*            <span className={'sch-sidebar-menu-item-span'}>Помощь</span>*/}
                    {/*        </div>*/}
                    {/*    </Menu.Item>*/}
                    {/*</Menu>*/}

                        <div className={'sch-app-menu-profile'} style={{display: 'flex', alignItems: 'center'}}>
                            <div className={'sch-app-menu-profile-avatar'}>
                                <Avatar size="large" icon={<UserOutlined />} />
                            </div>

                            <div style={{  fontSize: '20px', marginLeft: '20px'}}>Admin</div>
                        </div>


                    <Menu mode={'inline'}  inlineIndent={18} className={'sch-sidebar-menu'} style={{marginBottom: '30px' }}>
                        <Menu.Item key="5">
                            <div  className={'sch-sidebar-menu-item'}>
                                <Icon className={'sch-sidebar-menu-item-icon'}  component={IconBell} />
                                <span className={'sch-sidebar-menu-item-span'}>Уведомления</span>
                            </div>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>


        </Layout.Sider>

    )
}


export default Sidebar
