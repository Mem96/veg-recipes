import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import PageHeader from './components/PageHeader';

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Home/>} /> */}
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageHeader/>

    <Home />
  </React.StrictMode>
);


