import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Characters from './pages/Characters';
import Stuff from './pages/Stuff';
import Worlds from './pages/Worlds';
import Guide from './pages/Guide';
import Saved from './pages/Saved';
import Auth from './pages/Auth';
import Builds from './pages/Builds';
import ItemDetails from './pages/ItemDetails';
import NotFound from './pages/NotFound';
import CreateBuild from './pages/CreateBuild';

const routes = [
    { path: '/', component: Home },
    { path: '/characters', component: Characters },
    { path: '/stuff/:itemCategory?', component: Stuff },
    { path: '/stuff/:itemCategory?/:id?', component: ItemDetails },
    { path: '/builds/saved/create', component: CreateBuild },
    { path: '/builds/:type?', component: Builds },
    { path: '/worlds', component: Worlds },
    { path: '/guide', component: Guide },
    { path: '/saved', component: Saved },
    { path: '/auth', component: Auth },
    { path: '*', component: NotFound }
];

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.component />} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
