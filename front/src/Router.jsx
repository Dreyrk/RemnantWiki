import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Characters from './pages/Characters'
import Stuff from './pages/Stuff'
import Worlds from './pages/Worlds'
import Guide from './pages/Guide'
import Saved from './pages/Saved'
import Login from './pages/Login'


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/characters' element={<Characters />} />
                <Route path='/stuff' element={<Stuff />} />
                <Route path='/worlds' element={<Worlds />} />
                <Route path='/guide' element={<Guide />} />
                <Route path='/saved' element={<Saved />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
