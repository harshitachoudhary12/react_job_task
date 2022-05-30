import React from 'react';
import reactDOM from 'react-dom';
import './styles/style.scss';
import Application from './Home';
import { Switch, Route } from 'react-router-dom';

reactDOM.render(
 <Application/>     
, document.getElementById('root'))