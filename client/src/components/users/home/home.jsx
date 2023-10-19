import { Col, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import './home.css';

export default function Home() {
    const userName = useSelector(state => state.userReducer.userName);

    return (
        <div className='home'>
            <Row >
                <Col span={14} offset={5}>
                    <div class="header-box">
                        <div class="icon">
                            <img src="https://estudyme.com/_next/image/?url=%2Fimages%2Fapp%2Festudyme%2Ficon-support-3d.png&w=256&q=100" alt=""
                                width="129" height="129" decoding="async" data-nimg="future" loading="lazy" />
                        </div>
                        <div class="content">Welcome back 
                            <span> {userName}!</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
