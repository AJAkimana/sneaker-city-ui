import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from '../components';
import { Routes } from './routes';

export class AppBody extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    );
  }
}
