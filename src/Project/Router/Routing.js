import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FindCar from "../FindCar/FindCar";
import { Provider } from "react-redux";
import { stroes } from "../Redux/store";
import Footer from "../FindCar/Footer";
import Nav from "../FindCar/NavBar";
import Detail from "../FindCar/Detail";
import Compare from "../FindCar/Compare";
import ListCars from "../FindCar/ListCars";
import ListPrice from "../FindCar/ListPrice";


const Routing = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/FindCar" element={<FindCar />}></Route>
                <Route path="*" element={<FindCar />}></Route>
                <Route path="/Detail" element={<Detail />}></Route>
                <Route path="/Compare" element={<Compare />} ></Route>
                <Route path="/ListOfCars" element={<ListCars />}></Route>
                <Route path="/ListPrice/:price" element={<ListPrice />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>

    )
}

const SetUp = () => {
    return <Provider store={stroes}>
        <Routing />
    </Provider>
}

export default SetUp;