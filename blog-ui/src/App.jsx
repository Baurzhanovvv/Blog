import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from "react-router";
import {HomeConnected} from "./components/home/homeContainer";
import {LoginConnected} from "./components/login/loginContainer";
import {HeaderConnected} from "./components/header/headerContainer";
import {PostConnected} from "./components/post/postContainer";
import {LikedConnected} from "./components/liked/likedContainer";

const App = () => {
    return (
        <div>
            <HeaderConnected />
            <Route exact path='/' render={() => <HomeConnected />}/>
            <Route exact path='/login' render={() => <LoginConnected />}/>
            <Route exact path='/register' render={() => <LoginConnected />}/>
            <Route exact path='/post/:id?' render={() => <PostConnected />}/>
            <Route exact path='/liked-post' render={() => <LikedConnected />}/>
        </div>
    );
}

export default App;
