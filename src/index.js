import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context';
import './index.css';
import FormComponent from './components/FormComponent'
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import ContactPage from './pages/Contact/ContactPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>

        <Route path='/' element = {<FormComponent />}/>
        <Route path = "/Home" element = {<Home />}/>
          <Route path = "about" element = {<About />} />
          <Route path = "contact" element = {<ContactPage/>}/>
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </AppProvider>
);