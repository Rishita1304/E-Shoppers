import { publicRequest } from "../Request";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/login', user)
        console.log(res.data);
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure());
    }
}
