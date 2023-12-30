import { publicRequest } from "../Request";
import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import {useNavigate } from "react-router-dom";

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}

export const logOut = async (dispatch)=>{
dispatch(logout());
}
