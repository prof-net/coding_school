import React, {useEffect} from 'react';
import {getPlayLists, IPlaylists, setCurrentPlaylist} from "./reducers/dashboard.reducer";
import {Col} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../../shared/reducers";
import axios from "axios";

const PlayLists = () => {



    const dispatch = useDispatch()

    const playlists:IPlaylists[] = useSelector((state:IRootState) => {
        return state.dashboard.playlists
    })

    const selectPlaylist:number = useSelector((state:IRootState) => {
        return state.dashboard.currentPlaylist
    })

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/playlists/').then((res) => {
            dispatch(getPlayLists(res.data))
        })
    }, [dispatch]);


    const onSelectPlaylist = (currentPlaylist: number) => {
        dispatch(setCurrentPlaylist(currentPlaylist))
    };


    const playlistMap = playlists.map((item:IPlaylists) => {
        return (
            <Col span={8} key={item.id}>
                <div className={'sch-dashboard-playlist' + item.id} style={{
                    display: 'flex',
                    width: '500px',
                    border: selectPlaylist === item.id ? `1px solid ${item.color}` : ''
                }} onClick={() => onSelectPlaylist(item.id)}>
                    <div style={{width: '100px', backgroundColor: item.color,}}>
                    </div>
                    <div style={{padding: '20px'}}>
                        <p>{item.title}</p>
                        {item.short_description}
                    </div>
                </div>
            </Col>
        )
    })

    return <>{playlistMap}</>
}

export default PlayLists