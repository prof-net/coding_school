import React from 'react';
import {Row} from "antd";
import './dashboard.css';
import PlayLists from "./playlists";
import PlayList from "./playlist";

const DashBoard = () => {
    return (
        <div style={{margin: '35px'}}>
            <div className="site-card-wrapper" style={{marginBottom: '20px'}}>
                <Row gutter={16}>
                    <PlayLists />
                </Row>
            </div>

            <PlayList />
        </div>

    );
}

export default DashBoard;
