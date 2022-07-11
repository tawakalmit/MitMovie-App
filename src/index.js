import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from './components/nav';
import Jumbotron from './components/jumbotron';
import About from './components/about';
import Movies from './components/movies';
import Footer from './components/footer';
import Modal from './components/modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Modal />
    <Nav />
    <Jumbotron />
    <About />
    <Movies />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
