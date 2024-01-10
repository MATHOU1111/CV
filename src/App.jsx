import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home.jsx";

const App = () => {

  return (
	<div>
        <BrowserRouter basename="">
            <Routes>
                <Route path="/*" element={<Home />} />
            </Routes>
        </BrowserRouter>
	 </div>
  )
}

export default App
