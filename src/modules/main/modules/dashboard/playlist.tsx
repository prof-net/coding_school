import React, {useEffect, useState} from 'react';
import {Card, Collapse} from "antd";
import YouTube from "../../../../components/youtube/youtube";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../../shared/reducers";
import axios from "axios";
import {getPlayLists, IPlaylists} from "./reducers/dashboard.reducer";


const PlayList = () => {

    const { Panel } = Collapse;
    const [lessonsList, setLessonsList] = useState([]);

    const currentPlaylist:number = useSelector((state:IRootState) => {
        return state.dashboard.currentPlaylist
    })

    const playlists:IPlaylists[] = useSelector((state:IRootState) => {
        return state.dashboard.playlists
    })

    const playlist = playlists.find((item) => item.id === currentPlaylist);


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/lessons/${currentPlaylist}/`).then((res:any) => {
            setLessonsList(res.data)
        })
    }, [currentPlaylist]);


    const aaa = lessonsList.map((item:any) => {
        return (
            <Panel header={item.title} key={item.id}>
            <div style={{display: 'flex'}}>
                <YouTube  />

                <div style={{margin: '20px'}}>
                    Этот урок вступительный, здесь я расскажу чем мы будем заниматься, что тебя ждет. Жедаю успехов
                </div>
            </div>
        </Panel>)
    })

    return (
        playlist ?
        <Card title={playlist.title} >
            <div >

                {playlist.short_description}

                <Collapse accordion>
                    {aaa}
                </Collapse>
            </div>
        </Card> :
        <></>
    )
}

export default PlayList