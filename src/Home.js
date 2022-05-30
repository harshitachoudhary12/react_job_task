import React from 'react';
import reactDOM from 'react-dom';
import './styles/style.scss';
import App from './App';
import GetCountryList from './GetCountryList';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function Application() {
    return (
        <Router>
            <div>
        <Routes>
              <Route exact path='/' element={< App />}></Route>
              {/* <Route exact path='/List' element={< GetCountryList />}></Route> */}
              
       </Routes>
       </div>
    </Router>
      );
}
export default Application;
