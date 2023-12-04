import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootState} from "../../redux/reduxStore";

type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
export function WithAuthRedirect <T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStateToPropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    const RedirectContainer = connect(mapStateToProps)(RedirectComponent)
    return RedirectContainer
};

