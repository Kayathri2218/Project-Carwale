import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { carDetailsList, selectComapny, selectPrice, carDList } from '../Redux/slice';
import Card from '@mui/material/Card';
import './List.scss'
import { Button } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const ListCars = () => {

    const liSt = useSelector(({ allDetail }) => allDetail.carDetailsList);

    const listCar = useSelector(({ allDetail }) => allDetail.selectComapny);

    const logo = useSelector(({ allDetail }) => allDetail.logoImage);

    const [brands, setBrands] = useState([]);

    const BrandSet = (value) => {
        setBrands([value]);
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Detail = (value) => {
        dispatch(carDList(value));
        navigate("/Detail");
    }
    
    return (
        <>
            <div className='container-listcar'>
                {brands.length > 0 ? (
                    logo?.filter((e) => e.companyName === brands[0].companyName).map((v, i) => {
                        return (
                            <div key={i}>
                                <div className='head-div'>
                                    <h2>{v.companyName} Car</h2>
                                    <p>{v.companyName} car price starts at Rs 6.71 Lakh for the cheapest model which is
                                        Glanza and the price of most expensive model, which is Land Cruiser starts at
                                        Rs 2.10 Crore. Toyota offers 10 car models in India, including 4 cars in SUV
                                        category, 1 car in Sedan category, 1 car in Hatchback category, 3 cars in MUV</p>
                                </div>
                            </div>
                        )
                    })
                ) : (logo?.filter((l) => l.companyName === listCar).map((v, i) => (
                    <div key={i}>
                        <div className='head-div'>
                            <h2>{v.companyName} Car</h2>
                            <p>{v.companyName} car price starts at Rs 6.71 Lakh for the cheapest model which is
                                Glanza and the price of most expensive model, which is Land Cruiser starts at
                                Rs 2.10 Crore. Toyota offers 10 car models in India, including 4 cars in SUV
                                category, 1 car in Sedan category, 1 car in Hatchback category, 3 cars in MUV</p>
                        </div>
                    </div>
                )
                ))}
                <div className='row'>
                    <div className='col-1'>
                        <div className='static'>
                            <div className='static-1'>
                                <div>
                                    <p>
                                        <FilterAltIcon />
                                        Filter
                                    </p>
                                </div>
                                <div>
                                    <Button variant='outlined'>Make</Button>
                                    <Button variant='outlined'>Budget</Button>
                                    <Button variant='outlined'>Body Type</Button>
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
                        {brands.length > 0 ? (
                            liSt?.filter((e) => e.company === brands[0].companyName).map((value, index) => {
                                return (
                                    <div key={index}>
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
                                    </div>
                                )
                            })
                        ) : (
                            liSt?.filter((e) => e.company == listCar)?.map((value, index) => {
                                return (
                                    <div key={index}>
                                        <div>
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
                                        </div>
                                    </div>
                                )
                            })
                        )}
                    </div>
                    <div className='col-2'>
                        <h1>Similar Brands</h1>
                        <div className='row'>
                            {logo.map((value, index) => {
                                return (
                                    <div key={index} className='div'>
                                        <div className='img-div' onClick={() => BrandSet(value)}>
                                            <img src={value.image} alt='no image'></img>
                                            <p>{value.companyName}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ListCars