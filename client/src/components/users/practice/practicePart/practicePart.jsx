import { faEarListen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Spin, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getPracticeParts } from '../../../../api/service/PracticeService';
import { setPracticePartId } from '../../../redux/_actions/practice.actions';
import "./practicePart.css";

export default function PracticePart() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const practiceId = useSelector(state => state.practiceReducer.practiceId);
    const practiceType = useSelector(state => state.practiceReducer.practiceType);
    const dispatch = useDispatch();

    /**
     * Updates the practice part ID in the Redux store.
     *
     * @param {object} data - Object containing the practice part ID.
     */
    const changePracticePartId = (data) => {
        dispatch(setPracticePartId(data.id))
    }

    /**
     * UseEffect hook that gets all practice parts from the API on mount, or navigates to the /practice page if there is no practice ID.
     */
    useEffect(() => {
        setLoading(true)
        if (practiceId) {
            getPracticeParts(`parts?practice-id=${practiceId}`)
                .then((res) => {
                    setLoading(false)
                    setData(res.data.data);
                }).catch((Error) => {
                    console.log(Error)
                })
        } else {
            navigate("/practice")
        }
    }, [practiceId, navigate]);

    return (
        <div style={{ 'minHeight': '513px' }}>
            <h1 className='pListen__heading'>Practice TOEIC Test Online </h1>
            {practiceType === 'listen' ?
                <h2 className='pListen__title'>
                    <FontAwesomeIcon className='pListen__title-icon' icon={faEarListen} />
                    Listening
                </h2>
                : practiceType === 'read' ?
                    <h2 className='pListen__title'>
                        <FontAwesomeIcon className='pListen__title-icon' icon={faEarListen} />
                        Reading
                    </h2>
                    : practiceType === 'speak' ?
                        <h2 className='pListen__title'>
                            <FontAwesomeIcon className='pListen__title-icon' icon={faEarListen} />
                            Speaking
                        </h2>
                        :
                        <h2 className='pListen__title'>
                            <FontAwesomeIcon className='pListen__title-icon' icon={faEarListen} />
                            Writing
                        </h2>
            }
            {loading ?
                <div className="example">
                    <Spin />
                </div> :
                <div className=' row test' >
                    {data?.map((item) => (
                        <div className='col l-2 m-4 c-6' key={item.id} >
                            <Link to={'/practice/skill/topic'} onClick={() => changePracticePartId(item)} className='pListen__link'>
                                <div className='pListen' >
                                    <img className='pListen_img' src={item.imageURL} alt="" />
                                    <Tooltip title={item.description} color="#2db7f5"  >
                                        <h2>{item.name}</h2>
                                        <p>{item.description}</p>
                                    </Tooltip>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}
