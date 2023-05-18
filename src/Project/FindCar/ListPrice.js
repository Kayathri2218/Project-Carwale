import React from 'react'
import { useSelector } from 'react-redux';
import { carDetailsList, selectComapny, selectPrice,carDList } from '../Redux/slice';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useDispatch } from 'react-redux';
import './List.scss'

const ListPrice = () => {

    const liSt = useSelector(({ allDetail }) => allDetail);

    const listPrice = useSelector(({ allDetail }) => allDetail.selectPrice);

    const params = useParams();
    const [state, setState] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Detail = (value) => {
        dispatch(carDList(value));
        navigate("/Detail");
    }

    useEffect(() => {
        var Prize = [...liSt.carDetailsList].filter(value => Number(value.prize.split(' ')[1]) <= params.price)
        console.log("filter", Prize);
        setState(Prize)
    }, [params])

    return (
        <div className='container-listcar-1'>
            <div className='row'>
                <div className='head'>
                    <h1>Best Cars Under 30 Lakh</h1>
                    <p>Are you planning on buying a car under ₹ 30 lakh? Well, we know that budget is one
                        of the most crucial things while buying a car and with so many options available
                        out there, it gets really difficult to find a good car which suits your pocket.
                        Hence, we have put together a complete list of best cars under ₹ 30 lakh.
                    </p>
                </div>
                <div className='static'>
                    <div className='static-1'>
                        <div>
                            <p>
                                <FilterAltIcon />
                                Filter
                            </p>
                        </div>
                        <div>
                            <Button variant='outlined'>Budget</Button>
                            <Button variant='outlined'>Body Type</Button>
                            <Button variant='outlined'>Fuel Type</Button>
                            <Button variant='outlined'>Transmission Type</Button>
                            <Button variant='outlined'>More Filter</Button>
                        </div>
                    </div>
                    <div className='static-2'>
                        <div>
                            <p>Sort By</p>
                        </div>
                        <div>
                            <Button variant='outlined'>Popularity</Button>
                        </div>
                    </div>
                </div>
                <div className='col-1'>
                    {state?.map((value, index) => {
                        return (
                            <div key={index} className='card'>
                                <Card>
                                    <div className='space'>
                                        <div className='image'>
                                            <img src={value.image} alt='image' onClick={() => Detail(value)} />
                                        </div>
                                        <div className='content'>
                                            <div>
                                                <h3>{value.model}</h3>
                                                <div className='sub'>
                                                    <p>
                                                        <span>5 Star Safety</span>
                                                        <span>10-14 kmpl</span>
                                                        <span>164-201 bhp</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <h4>{value.prize} <span>onwards</span></h4>
                                                <p>Avg. Ex-Showroom price</p>
                                            </div>
                                            <div>
                                                <a href='#'>Get Best Offer</a>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default ListPrice