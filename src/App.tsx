import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import FriendsContainer from "./components/friends/FriendsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profle/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/Login/Login";



const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>

            <NavbarContainer/>
            <div className={'app-wrapper-content'}>
                <Route render={() => <ProfileContainer/>} path={'/profile/:userId?'}/>
                <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
                <Route render={() => <News/>} path={'/news'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <Settings/>} path={'/settings'}/>
                <Route render={() => <FriendsContainer/>} path={'/friends'}/>
                <Route render={() => <UsersContainer/>} path={'/users'}/>
                <Route render={() => <Login/>} path={'/login'}/>

            </div>
        </div>
    );
}

export default App;
