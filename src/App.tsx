import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
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
import {compose} from "redux";
import {connect} from "react-redux";
import {setInitialisingTC} from "./redux/appReducer";
import {RootState} from "./redux/reduxStore";
import Preloader from "./components/common/Preloader";


class App extends React.Component<AppPropsType>{
    componentDidMount() {
        this.props.setInitialisingTC()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
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
}

type AppPropsType= MapStateToPropsApp & MapDispatchToPropsApp

type MapDispatchToPropsApp = {
    setInitialisingTC: () => Promise<void>;
}
type MapStateToPropsApp = {
    initialized: boolean
}
const mapStateToPropsApp = (state: RootState): MapStateToPropsApp => {
    return {
        initialized: state.app.initialized
    }
}
export default compose<React.ComponentType>(withRouter,
    connect(mapStateToPropsApp, {setInitialisingTC})
)(App)