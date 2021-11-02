import React, {useEffect} from 'react';
import './App.scss';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from "react-router";
import {Post} from "./components/post/post";
import Liked from "./components/liked/liked";
import {HomeConnected} from "./components/home/homeContainer";
import {LoginConnected} from "./components/login/loginContainer";
import {HeaderConnected} from "./components/header/headerContainer";
import {PostConnected} from "./components/post/postContainer";

const App = () => {
    return (
        <div>
            <HeaderConnected />
            <Route exact path='/' render={() => <HomeConnected />}/>
            <Route exact path='/login' render={() => <LoginConnected />}/>
            <Route exact path='/register' render={() => <LoginConnected />}/>
            <Route exact path='/post/:id?' render={() => <PostConnected />}/>
            <Route exact path='/liked-post' render={() => <Liked />}/>
        </div>
    );
}

export default App;
