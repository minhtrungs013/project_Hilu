import { faCheck, faEarListen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Route, Routes } from "react-router-dom";
import { COLOR_DEFAULT, COLOR_FAIL, COLOR_MEDIUM, COLOR_SUCCESS } from '../../../../../commom/messageConstant';
import Lesson from "../lesson/lesson";
import "./test.css";

export default function Test() {

    const [loading, setLoading] = useState(false)
    const practicePartId = useSelector(state => state.practiceReducer.practicePartId);
    const practicePart = useSelector(state => state.practiceReducer.practicePart);
    const [data, setData] = useState([])
    const [test, setTest] = useState(false)
    const [dataLesson, setDataLesson] = useState([])
    const [dataLessonId, setDataLessonId] = useState(null)

    /**
     * UseEffect hook that sets the lesson data and test data based on the practice part data.
     */
    useEffect(() => {
        setLoading(true)
        if (practicePart !== null && practicePart.length > 0) {
            const part = practicePart.filter((item) => item.id === practicePartId)
            setDataLesson(part[0]?.lessons)
            setData(part[0]?.tests)
            setLoading(false)
        }
    }, [practicePart, practicePartId]);

    const onclickShowListenStart = (data) => {
        // dispatch(setObjectId(data.id))
    }

    /**
     * Sets the lesson ID and test flag based on the lesson data.
     *
     * @param {object} data The lesson data.
     */
    const getLessonsId = (data) => {
        if (dataLessonId !== null && dataLessonId?.id === data?.id) {
            setDataLessonId(null)
            setTest(false)
        } else {
            setDataLessonId(data)
            setTest(true)
        }
    }

    /**
     * Checks the color percent of the given item.
     *
     * @param {object} item The item to check the color percent of.
     * @returns {string} The color percent of the item, either `COLOR_FAIL`, `COLOR_MEDIUM`, `COLOR_SUCCESS`, or `COLOR_DEFAULT`.
     */
    const checkColorPercent = (item) => {
        const percent = parseInt((item.correctAnswer / item.totalQuestions) * 100)
        if (percent > 0 && percent < 50) {
            return COLOR_FAIL
        } else if (percent > 49 && percent < 75) {
            return COLOR_MEDIUM
        } else if (percent > 74) {
            return COLOR_SUCCESS
        } else {
            return COLOR_DEFAULT
        }
    }

    return (
        <div style={{ 'minHeight': '513px' }}>
            <h1 className='pListen__heading'>Start your TOEIC Listening Practice Test Now!</h1>
            <h2 className='pListen__title' >
                <FontAwesomeIcon className='pListen__title-icon' icon={faEarListen} />
                Listening</h2>
            {loading ?
                <div className="example">
                    <Spin />
                </div> :
                <div style={{ width: '100%' }}>
                    <div className='row '>
                        <div className='col l-3 m-4 c-12'>
                            <div className='lesson__ls'>
                                <h3>Lesson</h3>
                                <ul className='lesson__list'>
                                    {dataLesson?.map((item, index) => (
                                        <Link to={test ? '/practice/part/topic' : '/practice/part/topic/lesson'} className='lesson__item' key={item.id} onClick={() => getLessonsId(item)}>
                                            <div>
                                                Lesson {index + 1}: <span>{item.name}</span>
                                            </div>
                                            <FontAwesomeIcon className='lesson__item-icon' icon={faCheck} />
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='col l-9 m-8 c-12'>
                            <Routes>
                                <Route path={`/lesson`} element={<Lesson dataLessonId={dataLessonId} />} />
                            </Routes>
                            <div className='lesson__ls'>
                                <h3>Test</h3>
                                <div className='row '  >
                                    {data?.map((item, index) => (
                                        <div className='col l-2 l-2-4-t m-4 c-4' key={item.id} >
                                            <Link to={'/practice/skilLinkl/question'} className=' topic__item' onClick={() => onclickShowListenStart(item)} >
                                                <h1 style={{ color: checkColorPercent(item) }}>
                                                    {item.correctAnswer && item.correctAnswer !== null ?
                                                        parseInt((item.correctAnswer / item.totalQuestions) * 100)
                                                        :
                                                        0
                                                    }
                                                    %</h1>
                                                {item.correctAnswer !== null ?
                                                    <p style={{ margin: 0, fontSize: '10px', color: "#18bd18", fontWeight: 600 }}>
                                                        {item.correctAnswer}/{item.totalQuestions} correct</p>
                                                    :
                                                    <p ></p>
                                                }
                                                <h6>------</h6>
                                                <h3>{item.name}</h3>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

