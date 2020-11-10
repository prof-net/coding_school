import React, {useState} from 'react';
import {Card, Col, Collapse, Row, Tabs} from "antd";
import YouTube from "react-youtube";
import './dashboard.css';

const DashBoard = () => {

    const [selectCourse, setSelectCourse] = useState<number>(0);


    const { Panel } = Collapse;
    const opts:any = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        }
    }

    const onSelectCourse = (course:number) => {
        setSelectCourse(course)
    }

    const _onReady = (event:any)  => {
        event.target.pauseVideo();
    }

    return (

    <div style={{margin: '35px'}}>

        <div className="site-card-wrapper" style={{marginBottom: '20px'}}>
            <Row gutter={16}>
                <Col span={8}>
                    <div className={'sch-dashboard-playlist1'} style={{display: 'flex', width: '500px', border: selectCourse === 0 ? '1px solid #8A2BE2' : ''}} onClick={()=>onSelectCourse(0)}>
                        <div style={{width: '100px', backgroundColor: '#8A2BE2', }}>
                        </div>
                        <div style={{padding: '20px'}}>
                            <p>Плэйлист 1</p>
                            Базовый плэйлист по HTML и CSS, для детей 7-10 лет, из 20 уроков,
                            с домашними заданиями, оценками, построенный на базе увлекательной игры
                        </div>
                    </div>
                </Col>
                <Col span={8} onClick={()=>onSelectCourse(1)}>
                    <div  className={'sch-dashboard-playlist2'} style={{ display: 'flex', width: '500px', border: selectCourse === 1 ? '1px solid #00FA9A' : ''}}>
                        <div style={{width: '100px', backgroundColor: '#00FA9A', }}>
                        </div>
                        <div style={{padding: '20px'}} >
                            <p>Плэйлист 2</p>
                            Продолжение первой части по HTML и CSS, для детей 7-10 лет, из 20 уроков,
                            с домашними заданиями, оценками, построенный на базе увлекательной игры
                        </div>
                    </div>
                </Col>

            </Row>
        </div>

        {
            selectCourse === 0 ?
                <Card title="Плэйлист 1" >
                    <div >
                        <p>Знакомство с HTML и CSS.</p>
                        Этот плэйлист ориентирован для детей от 7 до 10 лет, и поможет войти в интересный мир
                        программирования с самого начала. Для его прохождения не требуется никаких навыков.
                        Этот курс состоит из 20 коротких видео уроков, в которых будет объясняться базовые моменты
                        WEB разработки, на примере создания простой игры.

                        <h3 style={{marginTop: '10px'}}>
                            Сотреть все видео
                        </h3>

                        <Collapse accordion>
                            <Panel header="1 урок - Приветствие! " key="1">
                                <div style={{display: 'flex'}}>
                                    <YouTube videoId="gsbLHt2ZlWE" opts={opts} onReady={_onReady} />

                                    <div style={{margin: '20px'}}>
                                        Этот урок вступительный, здесь я расскажу чем мы будем заниматься, что тебя ждет. Жедаю успехов
                                    </div>
                                </div>
                            </Panel>
                            <Panel header="2 урок - Введение. " key="2">
                                <div style={{display: 'flex'}}>
                                    <YouTube videoId="Abk6CF9C1Xk" opts={opts} onReady={_onReady} />

                                    <div style={{margin: '20px'}}>
                                        Этот урок вступительный, здесь я расскажу чем мы будем заниматься, что тебя ждет. Жедаю успехов
                                    </div>
                                </div>
                            </Panel>
                            <Panel header="3 урок - Языки программирования" key="3">
                                <div style={{display: 'flex'}}>
                                    <YouTube videoId="Obj-In0sWBE" opts={opts} onReady={_onReady} />

                                    <div style={{margin: '20px'}}>
                                        Этот урок вступительный, здесь я расскажу чем мы будем заниматься, что тебя ждет. Жедаю успехов
                                    </div>
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                </Card>

                : null
        }

        {
            selectCourse === 1 ?
                <Card title="Плэйлист 2" >
                    <div >
                        <p>Знакомство с HTML и CSS.</p>
                        Этот плэйлист ориентирован для детей от 7 до 10 лет, и поможет войти в интересный мир
                        программирования с самого начала. Для его прохождения не требуется никаких навыков.
                        Этот курс состоит из 20 коротких видео уроков, в которых будет объясняться базовые моменты
                        WEB разработки, на примере создания простой игры.

                        <h3 style={{marginTop: '10px'}}>
                            Сотреть все видео
                        </h3>

                        <Collapse accordion>
                            <Panel header="1 урок - Приветствие! " key="1">
                                <div style={{display: 'flex'}}>
                                    <YouTube videoId="gsbLHt2ZlWE" opts={opts} onReady={_onReady} />

                                    <div style={{margin: '20px'}}>
                                        Этот урок вступительный, здесь я расскажу чем мы будем заниматься, что тебя ждет. Жедаю успехов
                                    </div>
                                </div>
                            </Panel>
                            <Panel header="2 урок - Введение. " key="2">
                                <div style={{display: 'flex'}}>
                                    <YouTube videoId="Abk6CF9C1Xk" opts={opts} onReady={_onReady} />

                                    <div style={{margin: '20px'}}>
                                        Этот урок вступительный, здесь я расскажу чем мы будем заниматься, что тебя ждет. Жедаю успехов
                                    </div>
                                </div>
                            </Panel>
                            <Panel header="3 урок - Языки программирования" key="3">
                                <div style={{display: 'flex'}}>
                                    <YouTube videoId="Obj-In0sWBE" opts={opts} onReady={_onReady} />

                                    <div style={{margin: '20px'}}>
                                        Этот урок вступительный, здесь я расскажу чем мы будем заниматься, что тебя ждет. Жедаю успехов
                                    </div>
                                </div>
                            </Panel>
                        </Collapse>
                    </div>
                </Card>
                : null
        }

    </div>

    );
}

export default DashBoard;
