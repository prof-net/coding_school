import React from 'react';
import YouTube, {Options} from "react-youtube";

interface IProps {
    youtubeId: string
}


const Youtube = (props:IProps) => {


    const _onReady = (event:any)  => {
        event.target.pauseVideo();
    }

    const opts:Options = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        }
    }

    return <>
        <YouTube videoId={props.youtubeId} opts={opts} onReady={_onReady} />
    </>
}

export default Youtube;