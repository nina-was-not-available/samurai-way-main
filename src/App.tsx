import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profle/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import Friends from "./components/friends/Friends";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import {store} from "./redux/reduxStore";
import NavbarContainer from "./components/navbar/NavbarContainer";
import FriendsContainer from "./components/friends/FriendsContainer";

//props: AppPropsType


const App = () => {
    return (
            <div className="app-wrapper">
                <Header/>

                  {/*<Navbar sidebar={store.getState().sidebar}/>*/}
                  <NavbarContainer/>

                {/*<Navbar sidebar={props.state.sidebar} />*/}
                <div className={'app-wrapper-content'}>
                    {/*<Route render={() => <Profile profile={props.state.profilePage}  dispatch={props.dispatch}/>} path={'/profile'}/>*/}
                    <Route render={() => <Profile />} path={'/profile'}/>
                    <Route render={() => <DialogsContainer />} path={'/dialogs'}/>
                    {/*<Route render={() => <DialogsContainer dialogs={props.state.dialogs} dispatch={props.dispatch} />} path={'/dialogs'}/>*/}
                    <Route render={() => <News/>} path={'/news'}/>
                    <Route render={() => <Music/>} path={'/music'}/>
                    <Route render={() => <Settings/>} path={'/settings'}/>
                    {/*<Route render={() => <Friends friends={props.state.friends}/>} path={'/friends'}/>*/}

                  {/*<Route render={() => <Friends friends={store.getState().friends}/>} path={'/friends'}/>*/}
                  <Route render={() => <FriendsContainer/>} path={'/friends'}/>

                </div>
            </div>
    );
}

export default App;
