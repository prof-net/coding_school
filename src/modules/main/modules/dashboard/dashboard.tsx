import React, {useEffect, useState} from 'react';
import {Card, Col, Collapse, Row} from "antd";
import YouTube from './../../../../components/youtube/youtube';
import './dashboard.css';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {getPlayLists, IPlaylists} from "./reducers/dashboard.reducer";
import { IRootState } from '../../../../shared/reducers';
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
