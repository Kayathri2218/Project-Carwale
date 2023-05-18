import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Detail.scss"
import Button from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const Detail = () => {

    const state = useSelector(({ allDetail }) => allDetail.carDList);

    return (
        <div className="details-container">
            {[state]?.map((detail, index) => {
                return (<div key={index}>
                    <div className="details">
                        <div className="details-head">
                            <h1>{detail.model}</h1>
                        </div>
                        <div className="details-content">
                            <div className="details-img">
                                <img src={detail.image} />
                                <div>
                                    <p>
                                        <ColorLensIcon />
                                        Colors
                                    </p>
                                    <p>
                                        <ImageSearchIcon />
                                        Images
                                    </p>
                                    <p>
                                        <OndemandVideoIcon />
                                        Video
                                    </p>
                                </div>
                            </div>
                            <div className="details-text">
                                <div className="details-up-detail" >
                                    <div className="details-up" >
                                        <div>
                                            <p>version <span>:{detail.engine_type}</span></p>
                                            <p>Sigma 1.2L MT</p>
                                        </div>
                                        <KeyboardArrowRightIcon />
                                    </div>
                                    <div className="details-up" >
                                        <div>
                                            <p>city:chennai</p>
                                            <p>Show price in my city</p>
                                        </div>
                                        <KeyboardArrowRightIcon />
                                    </div>
                                </div>
                                <div >
                                    <h2>{detail.prize}</h2>
                                    <p>Avg. Ex-Showroom price</p>
                                </div>
                                <div className="emi-cal">
                                    <div className="emi-first">
                                        <p>Calculate your EMI</p>
                                        <p className="color-emi">EMI Calculator</p>
                                    </div>
                                    <div className="emi-second">
                                        <Button variant="outlined" className="btn-emi">Get EMI Offers</Button>
                                    </div>
                                </div>
                                <Button variant="contained" className="get-offer">
                                    Get April Offer
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="head-fronx">
                        <h1>Maruti Fronx Car Specifications</h1>
                        <div className="fronx-car-detail">
                            <div>
                                <p>Price</p>
                                <h5>{detail.prize}</h5>
                            </div>
                            <div>
                                <p>Mileage</p>
                                <h5>{detail.mileage}</h5>
                            </div>
                            <div>
                                <p>Engine</p>
                                <h5>{detail.engine}</h5>
                            </div>
                            <div>
                                <p>Fuel Type</p>
                                <h5>{detail.fuel_type}</h5>
                            </div>
                            <div>
                                <p>Transmission</p>
                                <h5>{detail.transmission}</h5>
                            </div>
                            <div>
                                <p>Seating Capacity</p>
                                <h5>{detail.seating_capacity}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="head-launch">
                        <h1>All New Maruti Fronx Summary</h1>
                        <div>
                            <h3>Price</h3>
                            <p>Maruti Fronx price ranges between Rs. 7.47 Lakh - Rs. 13.14 Lakh depending on the variant selected.</p>
                        </div>
                    </div>
                    <TableContainer >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableBody>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Engine</TableCell>
                                    <TableCell align="left">{detail.engine}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Engine Type</TableCell>
                                    <TableCell align="left">{detail.engine_type}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Fuel Type</TableCell>
                                    <TableCell align="left">{detail.fuel_type}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Max Power</TableCell>
                                    <TableCell align="left">{detail.max_power}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Max Torque</TableCell>
                                    <TableCell align="left">{detail.max_torque}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Mileage</TableCell>
                                    <TableCell align="left">{detail.mileage}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Driving Range</TableCell>
                                    <TableCell align="left">{detail.driving_range}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Drivertian</TableCell>
                                    <TableCell align="left">{detail.drivetrain}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Transmission</TableCell>
                                    <TableCell align="left">{detail.transmission}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Emission Standard</TableCell>
                                    <TableCell align="left">{detail.emission_standard}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>length (mm)</TableCell>
                                    <TableCell align="left">{detail.length}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">width ()mm</TableCell>
                                    <TableCell align="left">{detail.width}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Height(mm)</TableCell>
                                    <TableCell align="left">{detail.height}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Wheelbase(mm)</TableCell>
                                    <TableCell align="left">{detail.wheelbase}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Grand Clearnace(mm)</TableCell>
                                    <TableCell align="left">{detail.ground_clearance}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Doors</TableCell>
                                    <TableCell align="left">{detail.doors}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Seating Capacity</TableCell>
                                    <TableCell align="left">{detail.seating_capacity}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">No of Seating Rows</TableCell>
                                    <TableCell align="left">{detail.number_of_seating}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Bootspace</TableCell>
                                    <TableCell align="left">{detail.Bootspace}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Fuel Tank Capacity</TableCell>
                                    <TableCell align="left">{detail.Bootspace}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Front Suspension</TableCell>
                                    <TableCell align="left">{detail.front_suspension}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Rear Suspension</TableCell>
                                    <TableCell align="left">{detail.rear_suspension}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Front Break Type</TableCell>
                                    <TableCell align="left">{detail.front_break_type}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Rear Break Type</TableCell>
                                    <TableCell align="left">{detail.rear_break_type}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Minimum Turning Radius</TableCell>
                                    <TableCell align="left">{detail.minimum_turning_Radius}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Steering Type</TableCell>
                                    <TableCell align="left">{detail.stearing_type}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Wheels</TableCell>
                                    <TableCell align="left">{detail.wheels}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Spare Wheel</TableCell>
                                    <TableCell align="left">{detail.sparewheel}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Front Tyres</TableCell>
                                    <TableCell align="left">{detail.front_tyres}</TableCell>
                                </TableRow>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">Rear Tyres</TableCell>
                                    <TableCell align="left">{detail.rear_tyres}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                )
            })}

        </div>
    )
}

export default Detail;