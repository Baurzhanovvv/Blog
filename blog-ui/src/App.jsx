import React from 'react';
import './App.scss';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/home";
import {Route} from "react-router";
import Login from "./components/login/login";
import {Post} from "./components/post/post";
import Liked from "./components/liked/liked";

const App = () => {
    return (
        <div>
            <Header />
            <Route exact path='/' render={() => <Home />}/>
            <Route exact path='/login' render={() => <Login />}/>
            <Route exact path='/post/:id?' render={() => <Post />}/>
            <Route exact path='/liked-post' render={() => <Liked />}/>
        </div>
    );
}

export default App;
