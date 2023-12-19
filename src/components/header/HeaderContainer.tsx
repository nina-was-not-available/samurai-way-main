import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthInfoThunk, InitialAuthStateType, logoutThunk, setUserData} from "../../redux/authReducer";
import {RootState} from "../../redux/reduxStore";
import {GetAuthType} from "../../api/authAPI";



export type HeaderPT = mapDispatchToProps & mapStateToProps_T

class HeaderContainer extends React.Component<HeaderPT> {

    render() {
        return (
            <Header {...this.props}/>
        );
    };
}

const mapStateToDrops = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
type mapStateToProps_T = {
    isAuth: boolean
    login: null | string
}

type mapDispatchToProps = {
    setUserData: (data: GetAuthType, isAuth: boolean) => void
    logoutThunk: () => void
}

export default connect(mapStateToDrops, {setUserData, logoutThunk})(HeaderContainer);
