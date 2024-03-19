import React, { useEffect, useState } from 'react';
import injectContext from './store/AppContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DetailedPeople from './pages/DetailedPeople';
import DetailedPlanets from './pages/DetailedPlanets';
import DetailedVehicles from './pages/DetailedVehicles';

const App = () => {
    
    
    return (
        <>
            <nav class="navbar navbar-expand bg-body-secondary">
                <div class="container-fluid">
                    <div className='row justify-content-between'>
                        <div className='col-4'>
                    <a class="navbar-brand" href="#">STAR WARS</a>
                    </div>
                    <div className='col-4'>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle bg-primary text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Favorite
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </nav>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/detailedpeople/:url' element={<DetailedPeople />}/>
                    <Route path='/detailedplanets/:url' element={<DetailedPlanets />}/>
                    <Route path='/detailedvehicles/:url' element={<DetailedVehicles />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default injectContext(App);