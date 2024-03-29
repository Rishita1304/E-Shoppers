import { publicRequest } from "../Request";
import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data))
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}

export const logOut = async (dispatch)=>{
dispatch(logout());
}
