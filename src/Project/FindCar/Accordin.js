import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './According.scss';
import { useSelector, useDispatch } from 'react-redux';
import { carDList, carDetailsList, carSelectsA, carSelectB } from '../Redux/slice';
import { Button } from '@mui/material';

export const Accordin = () => {

    const carList = useSelector(({ allDetail }) => allDetail.carDetailsList);

    const dispatch = useDispatch();

    const Cars = (e) => {
        dispatch(carSelectsA(e));
    }

    return (
        <div className='Conatainer-accordin'>
            <div className='row-accord'>
                <div className='col-accord'>
                    <>
                        <Accordion className='overflow'>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Maruti suzuki</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Maruti suzuki")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Tata</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Tata")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Toyota</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Toyota")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>BMW</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "BMW")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Mahidra</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Mahidra")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Hyundai</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Hyundai")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Kia</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Kia")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>MG</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "MG")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Mercedes-Benz</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Mercedes-Benz")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Skoda</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Skoda")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Volkswagen</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Volkswagen")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Honda</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Honda")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                            </div>
                        </Accordion>
                    </>
                </div>
            </div>
        </div>
    )
}

export const AccordinB = () => {

    const carList = useSelector(({ allDetail }) => allDetail.carDetailsList);

    const dispatch = useDispatch();

    const Cars = (e) => {
        dispatch(carSelectB(e));
    }

    return (
        <div className='Conatainer-accordin'>
            <div className='row-accord'>
                <div className='col-accord'>
                    <>
                        <Accordion className='overflow'>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Maruti suzuki</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Maruti suzuki")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Tata</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Tata")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Toyota</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Toyota")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>BMW</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "BMW")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Mahidra</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Mahidra")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Hyundai</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Hyundai")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Kia</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Kia")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>MG</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "MG")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Mercedes-Benz</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Mercedes-Benz")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Skoda</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Skoda")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Volkswagen</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Volkswagen")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>Honda</Typography>
                                    </AccordionSummary>
                                    {carList.filter((value) => value.company === "Honda")?.map((e, i) => (
                                        <AccordionDetails key={i}>
                                            <Button className='accord-btn' onClick={() => Cars(e)}>
                                                <Typography>{e.model}</Typography>
                                            </Button>
                                        </AccordionDetails>
                                    ))}
                                </Accordion>
                            </div>
                        </Accordion>
                    </>
                </div>
            </div>
        </div>
    )
}
