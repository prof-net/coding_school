import React from 'react';
import YouTube, {Options} from "react-youtube";

const Youtube = () => {


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
        <YouTube videoId="Abk6CF9C1Xk" opts={opts} onReady={_onReady} />
    </>
}

export default Youtube;