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
import SavedBuilds from './components/SavedBuilds';
import SavedItems from './components/SavedItems';
import Classes from './components/Classes';
import Traits from './components/Traits';

const routes = [
    { path: '/', component: Home },
    //CHARACTERS
    { path: '/characters', component: Characters },
    { path: '/characters/classes', component: Classes },
    { path: '/characters/traits', component: Traits },
    { path: '/characters/builds/bests', component: Builds },
    //STUFF
    { path: '/stuff/:itemCategory?', component: Stuff },
    { path: '/stuff/:itemCategory?/:id?', component: ItemDetails },
    { path: '/builds/:type?', component: Builds },
    { path: '/worlds', component: Worlds },
    { path: '/guide/:type?', component: Guide },
    //SAVED
    { path: '/saved/builds/create', component: CreateBuild },
    { path: '/saved/builds/:name?', component: SavedBuilds },
    { path: '/saved/items/', component: SavedItems },
    { path: '/saved', component: Saved },
    //AUTH & OTHER
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
