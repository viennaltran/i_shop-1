import types from './types';
import axios from 'axios';

export const signUp = userInfo => async dispatch => {
    try {
        const resp = await axios.post('/auth/sign-up', userInfo)

        console.log('Sign Up Response', resp);
    } catch(err){
        console.log('Sign Up Error', err.message);
    }
}
