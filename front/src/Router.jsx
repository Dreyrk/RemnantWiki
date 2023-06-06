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
import Walkthrough from './pages/Walkthrough';
import SavedBuilds from './components/SavedBuilds';
import SavedItems from './components/SavedItems';
import Classes from './components/Classes';
import Traits from './components/Traits';
import BestBuilds from './components/BestBuilds';
import Achievements from './pages/Achievements';
import BossPage from './pages/BossPage';
import EnemyPage from './pages/EnemyPage';

const routes = [
    { path: '/', component: Home },
    //CHARACTERS
    { path: '/characters', component: Characters },
    { path: '/characters/classes', component: Classes },
    { path: '/characters/traits/:id?', component: Traits },
    { path: '/characters/builds/bests', component: BestBuilds },
    //STUFF
    { path: '/stuff/:itemCategory?', component: Stuff },
    { path: '/stuff/:itemCategory?/:id?', component: ItemDetails },
    { path: '/builds/:type?', component: Builds },
    //SAVED
    { path: '/saved/builds/create', component: CreateBuild },
    { path: '/saved/builds/:name?', component: SavedBuilds },
    { path: '/saved/items/', component: SavedItems },
    { path: '/saved', component: Saved },
    //GUIDE
    { path: '/guide', component: Guide },
    { path: '/guide/walkthrough', component: Walkthrough },
    { path: '/guide/achievements', component: Achievements },
    //WORLDS
    { path: '/worlds', component: Worlds },
    { path: '/worlds/bosses', component: BossPage },
    { path: '/worlds/enemy', component: EnemyPage },
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
