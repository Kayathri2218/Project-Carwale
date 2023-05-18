import React, { useState } from 'react'
import './findcar.scss'
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import SearchIcon from '@mui/icons-material/Search';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SimpleDialog from './dialog'
import SimpleDialogB from './dialogB'
import { carDList, selectComapny, selectPrice } from '../Redux/slice';

const FindCar = () => {

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const logo = useSelector(({ allDetail }) => allDetail.logoImage);

  const carList = useSelector(({ allDetail }) => allDetail.carDetailsList);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const btnList = [
    { "btn": "Under 5 lakh", "price": "₹ 5 Lakh" },
    { "btn": "Under 6 lakh", "price": "₹ 6 Lakh" },
    { "btn": "Under 7 lakh", "price": "₹ 7 Lakh" },
    { "btn": "Under 8 lakh", "price": "₹ 8 Lakh" },
    { "btn": "Under 10 lakh", "price": "₹ 10 Lakh" },
    { "btn": "Under 15 lakh", "price": "₹ 15 Lakh" },
    { "btn": "Under 20 lakh", "price": "₹ 20 Lakh" },
    { "btn": "Under 25 lakh", "price": "₹ 25 Lakh" },
    { "btn": "Under 30 lakh", "price": "₹ 30 Lakh" },
    { "btn": "Luxury Cars" }
  ]

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showDetail = (value) => {
    dispatch(carDList(value));
    navigate("/Detail");
  };

  const ListOfCompany = (value) => {
    dispatch(selectComapny(value.companyName));
    navigate('/ListOfCars');
  }

  const ListOfCarPrice = (value) => {
    let p = value.split(' ');
    navigate("/ListPrice/" + p[1]);
  }

  const Compare = () => {
      navigate('/Compare');
  }

  return (
    <>

      {/* Banner */}

      <div>
        <div className="home">
          <div className="home-content">
            <h1>FIND THE RIGHT CAR</h1>
            <div className="all">
              <div className="home-all">
                <div className="new">
                  <p>NEW</p>
                </div>
                <div className="search-icon">
                  <SearchIcon></SearchIcon>
                </div>
                <div className="home-search">
                  <input type="text" className="home-input" placeholder="Type To select Car Name"></input>
                </div>
                <div className="button-move">
                  <button className="home-button">Search</button>
                </div>
              </div>
              <div className="serach-bottom">
                <div>
                  <p>e.g. MG Comet EV</p>
                  <p>New Car Discounts | Help Me Find A Car | Sell My Car</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slide */}

      <div className="slide-container">
        <div className="slide-head">
          <h1>Featured Cars</h1>
          <Box sx={{ width: '100%' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab value="one" label="POPULAR" />
              <Tab value="two" label="JUST LAUNCHED" />
              <Tab value="three" label="UPCOMING" />
            </Tabs>
          </Box>
        </div>

        {/* Slider */}


        <div className="slides">
          <Slider {...settings} className='slider'>
            {carList.map((value, index) => {
              return (
                <div className="slide1" key={index}>
                  <Card sx={{ maxWidth: 345 }} className='card-width'>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image={value.image}
                      onClick={() => showDetail(value, index)}
                    />
                    <CardContent>
                      <Typography variant="body2" className="card-price" >
                        {value.company}
                      </Typography>
                      <Typography gutterBottom variant="h5" className="card-title">
                        {value.prize} onwards
                      </Typography>
                      <Typography variant="body2" className="card-avg" >
                        Avg. Ex-Showroom price
                      </Typography>
                      <div className='button-outlined'>
                        <Button variant="outlined">Show price in my city</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })
            }
          </Slider>
        </div>
      </div>


      {/* All Brends */}

      <div className='container-brends'>
        <h1> All Brends</h1>
        <div className='row-brends'>
          {logo.map((value, index) => {
            return (
              <div className='col-brends' key={index}>
                <div>
                  <div className='img-div' onClick={() => ListOfCompany(value)}>
                    <img src={value.image} alt='image'></img>
                    <p>{value.companyName}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Find Cars Filter */}

      <div className='find'>
        <div className='Container-find'>
          <h1>Find The Cars OF Your Choice</h1>
          <div className='row-find'>
            <div className='col-find'>
              {btnList.map((value, index) => {
                return (
                  <div key={index}>
                    <button onClick={() => ListOfCarPrice(value.price)}>{value.btn}</button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Compare Car */}

      <div className='conatainer-dialog'>
        <h2>Compare Car</h2>
        <div className='row-dialog'>
          <div className='Car-One'>
            <div>
              <SimpleDialog />
            </div>
          </div>
          <div className='Car-One'>
            <div>
              <SimpleDialogB />
            </div>
          </div>
        </div>
        <div className='btn-compare' onClick={() => Compare()}>
          <Button className='btn' variant='contained'>Compare</Button>
        </div>
      </div>
    </>
  )
}

export default FindCar