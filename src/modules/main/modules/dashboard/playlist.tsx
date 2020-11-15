import React, {useEffect, useState} from 'react';
import {Card, Collapse} from "antd";
import YouTube from "../../../../components/youtube/youtube";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../../shared/reducers";
import axios from "axios";
import {ILesson, IPlaylists, setLesson} from "./reducers/dashboard.reducer";


const PlayList = () => {
    const dispatch = useDispatch();

    const { Panel } = Collapse;
    const [lessonsList, setLessonsList] = useState([]);

    const currentPlaylist:number = useSelector((state:IRootState) => {
        return state.dashboard.currentPlaylist
    })

    const playlists:IPlaylists[] = useSelector((state:IRootState) => {
        return state.dashboard.playlists
    })

    const lessonsListInfo:ILesson[] = useSelector((state:IRootState) => {
        return state.dashboard.lesson
    })


    const playlistItem = playlists.find((item) => item.id === currentPlaylist);


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/lessons/${currentPlaylist}/`).then((res) => {
            setLessonsList(res.data)
        })
    }, [currentPlaylist]);


    const onInfoVideo = (id:any) => {
        if (id) {
            axios.get(`http://127.0.0.1:8000/api/v1/lesson/${id}/`).then((res) => {
                dispatch(setLesson(res.data))
            })
        }

    }

    const lesson = lessonsList.map((item:ILesson) => {
        const lessonInfoItem = lessonsListInfo.find((i) => i.id===item.id)

        return (
            <Panel header={item.title} key={item.id} >
            <div style={{display: 'flex'}} >
                {
                    lessonInfoItem ?
                        <>
                            <YouTube youtubeId={lessonInfoItem.youtube_id} />

                            <div style={{margin: '20px'}}>
                                {lessonInfoItem.description}
                            </div>
                        </>
                        : null
                }
            </div>
        </Panel>)
    })

    return (
        playlistItem ?
        <Card title={playlistItem.title} >
            <div >

                {playlistItem.short_description}

                <Collapse accordion onChange={(id)=>onInfoVideo(id)} >
                    {lesson}
                </Collapse>
            </div>
        </Card> :
        <></>
    )
}

export default PlayList