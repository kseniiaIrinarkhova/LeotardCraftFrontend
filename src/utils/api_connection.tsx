import axios, { AxiosError } from 'axios';
import { getErrorMessage } from './error.util';
import { IProject } from '../vite-env';
import { useAuth } from '../context/auth/auth.context';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

async function login(formData: any): Promise<String> {
    try {
        let res = await axios({
            method: 'POST',
            url: `${API_URL}/api/users/login`,
            data: formData
        })
        if (res.data) return res.data.data[0].token
        else throw new Error((res.data.message) ? res.data.message : "Login error")
    } catch (err) {
        if(err instanceof AxiosError)
            throw new Error((err.response) ? err.response.data.message: "Error in log in form")
        throw new Error("Error in log in form")
    }
}

async function register(formData: any): Promise<String> {
    try {
        let res = await axios({
            method: 'POST',
            url: `${API_URL}/api/users/register`,
            data: formData
        })
        if (res.data) return res.data.data[0].token
        else throw new Error((res.data.message) ? res.data.message : "Registration error")
    } catch (err) {
        if (err instanceof AxiosError)
            throw new Error((err.response) ? err.response.data.message : "Error in registration form")
        throw new Error("Error in registration form")
    }
}
async function getUserProjects(cookies : any) : Promise<IProject[]> {
    try{
        if(!cookies.is_authorized) throw new Error("You are not authorized");
        let res = await axios({
            method: 'GET',
            url: `${API_URL}/api/projects`,
            headers :{
                'x-auth-token': cookies.token || ""
            }
        })
        return res.data.data
    }catch(err){
        throw getErrorMessage(err);
    }
}

async function getUserProject(cookies: any): Promise<IProject> {
    console.log(cookies)
    try {
        if (!cookies.is_authorized) throw new Error("You are not authorized");
        let res = await axios({
            method: 'GET',
            url: `${API_URL}/api/projects/${cookies.project_id}`,
            headers: {
                'x-auth-token': cookies.token || ""
            }
        })
        console.log(res.data.data)
        return res.data.data[0]
    } catch (err) {
        throw getErrorMessage(err);
    }
}
export { login, register, getUserProjects,getUserProject };