import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from './Counter';
import CounterValue from './CounterValue';
import Page from './Page';
const Routing = () => {
  return (
    <div>
        <BrowserRouter>
            <Page />
            <Routes>
                <Route path='/Counter' element = {<Counter />}/>
                <Route path='/CounterValue' element = {<CounterValue />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing