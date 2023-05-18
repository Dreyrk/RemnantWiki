import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import Characters from './pages/Characters'
import Stuff from './pages/Stuff'
import Worlds from './pages/Worlds'
import Guide from './pages/Guide'
import Saved from './pages/Saved'
import Auth from './pages/Auth'
import Builds from './pages/Builds'
import ItemDetails from './pages/ItemDetails'
import NotFound from './pages/NotFound'


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/characters' element={<Characters />} />
                <Route path='/stuff/:itemCategory?' element={<Stuff />} />
                <Route path='/stuff/:itemCategory?/:id?' element={<ItemDetails />} />
                <Route path='/builds/:type?' element={<Builds />} />
                <Route path='/worlds' element={<Worlds />} />
                <Route path='/guide' element={<Guide />} />
                <Route path='/saved' element={<Saved />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
