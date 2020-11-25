import React from 'react';
import './admin.css';
import {Layout, Menu} from "antd";
import {Link, Route} from "react-router-dom";
import PlayList from './models/playlist';


const Admin = () => {


    return <div className="sch-admin">
        <div className="sch-admin-menu">

            <Menu mode="inline" >
                    <Menu.Item key="1">
                        <Link to={`/admin/playlists`}>
                            <div>
                                Плэйлисты
                            </div>
                        </Link>

                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={`/admin/lessons`}>
                            <div>
                                Уроки
                            </div>
                        </Link>

                    </Menu.Item>
            </Menu>

        </div>
        <div>
            <Route exact path='/admin/playlists' component={()=>(<PlayList/>)}/>
            <Route exact path='/admin/lessons' component={()=>(<>Уроки</>)}/>
        </div>
    </div>
}

export default Admin;