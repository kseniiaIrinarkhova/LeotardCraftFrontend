import axios, { AxiosError } from 'axios';
import { getErrorMessage } from './error.util';
import { IFabric, IProject, IRhinestone, IUser, ProjectFabric } from '../vite-env';

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
    try {
        if (!cookies.is_authorized) throw new Error("You are not authorized");
        let res = await axios({
            method: 'GET',
            url: `${API_URL}/api/projects/${cookies.project_id}`,
            headers: {
                'x-auth-token': cookies.token || ""
            }
        })
        return res.data.data[0]
    } catch (err) {
        throw getErrorMessage(err);
    }
}

async function getFabricById(cookies: any, fabric_id:string):Promise<IFabric>{
    try {
        if (!cookies.is_authorized) throw new Error("You are not authorized");
        let res = await axios({
            method: 'GET',
            url: `${API_URL}/api/fabrics/${fabric_id}`,
            headers: {
                'x-auth-token': cookies.token || ""
            }
        })
        return res.data.data[0]
    } catch (err) {
        throw getErrorMessage(err);
    }
}


async function getRhinestoneById(cookies: any, rhinestone_id: string): Promise<IRhinestone> {
    try {
        if (!cookies.is_authorized) throw new Error("You are not authorized");
        let res = await axios({
            method: 'GET',
            url: `${API_URL}/api/stones/${rhinestone_id}`,
            headers: {
                'x-auth-token': cookies.token || ""
            }
        })
        return res.data.data[0]
    } catch (err) {
        throw getErrorMessage(err);
    }
}

async function getAllFabrics(cookies: any): Promise<IFabric[]> {
    try {
        if (!cookies.is_authorized) throw new Error("You are not authorized");
        let res = await axios({
            method: 'GET',
            url: `${API_URL}/api/fabrics`,
            headers: {
                'x-auth-token': cookies.token || ""
            }
        })
        return res.data.data
    } catch (err) {
        throw getErrorMessage(err);
    }
}

async function getAllRhinestones(cookies: any): Promise<IRhinestone[]> {
    try {
        if (!cookies.is_authorized) throw new Error("You are not authorized");
        let res = await axios({
            method: 'GET',
            url: `${API_URL}/api/stones`,
            headers: {
                'x-auth-token': cookies.token || ""
            }
        })
        return res.data.data
    } catch (err) {
        throw getErrorMessage(err);
    }
}

async function getUserData(cookies: any): Promise<IUser> {
    try {
        if (!cookies.is_authorized) throw new Error("You are not authorized");
        let res = await axios({
            method: 'GET',
            url: `${API_URL}/api/users/account`,
            headers: {
                'x-auth-token': cookies.token || ""
            }
        })
        return res.data.data[0]
    } catch (err) {
        throw getErrorMessage(err);
    }
}
async function addFabricToProject(project_id:string, fabric_id:string, quantity:string|null, cookies:any){
    cookies.project_id = project_id;
    const projectData = await getUserProject(cookies);
    let fabricsData:{fabric_id:string, quantity:string}[] = [];
    if(projectData.fabrics){
        fabricsData = projectData.fabrics.map((fab)=>{
            return {
                fabric_id: fab.fabric_id,
                quantity: fab.quantity.toString()
            }
        })
    }
    fabricsData.push({fabric_id:fabric_id,quantity: (quantity)? quantity:"0"})
    console.log(fabricsData)
    try {
        let res = await axios({
            method: 'PATCH',
            url: `${API_URL}/api/projects/${project_id}`,
            data: { fabrics: fabricsData },
            headers: {
                'x-auth-token': cookies.token || ""
            }
        })
        console.log(res.data)
    } catch (err) {
        if (err instanceof AxiosError)
            throw new Error((err.response) ? err.response.data.message : "Error in adding fabric")
        throw new Error("Error in adding fabric")
    }
}
export { login, register, getUserProjects, getUserProject, getFabricById, getRhinestoneById, getAllFabrics, getAllRhinestones, getUserData, addFabricToProject };