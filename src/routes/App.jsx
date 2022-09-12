import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../containers/Home'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout'

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route element={NotFound} />
                </Routes>  
            </Layout>
        </BrowserRouter>
        
    )
}

export default App