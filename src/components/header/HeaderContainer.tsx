import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthInfoThunk, InitialAuthStateType, setUserData} from "../../redux/authReducer";
import {RootState} from "../../redux/reduxStore";
import {authAPI} from "../../api/authAPI";
import {debuglog} from "util";
import {ResultType} from "../../redux/usersReducer";


export type HeaderPT = mapDispatchToProps & mapStateToProps_T

class HeaderContainer extends React.Component<HeaderPT> {
    componentDidMount() {
        this.props.getAuthInfoThunk()
        // authAPI.getAuthInfo()
        //     .then(response => {
        //         if (response.resultCode === 0) {
        //             this.props.setUserData(response.data)
        //         }
        //
        //     })

    }

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
    setUserData: (data: InitialAuthStateType) => void
    getAuthInfoThunk: () => Promise<void>;
}

export default connect(mapStateToDrops, {setUserData, getAuthInfoThunk})(HeaderContainer);
