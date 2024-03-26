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
        if (err instanceof AxiosError)
            throw new Error((err.response) ? err.response.data.message : "Error in log in form")
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
async function getUserProjects(cookies: any): Promise<IProject[]> {
    try {
        if (!cookies.is_authorized) throw new Error("You are not authorized");
        let res = await axios({
            method: 'GET',
            url: `${API_URL}/api/projects`,
            headers: {
                'x-auth-token': cookies.token || ""
            }
        })
        return res.data.data
    } catch (err) {
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

async function getFabricById(cookies: any, fabric_id: string): Promise<IFabric> {
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
async function addFabricToProject(project_id: string, fabric_id: string, quantity: string | null, cookies: any): Promise<boolean> {
    //add project_id to cookies
    cookies.project_id = project_id;
    //get project data
    const projectData = await getUserProject(cookies);

    let fabricsData: { fabric_id: string, quantity: string }[] = [];
    //create array of existing fabric
    if (projectData.fabrics) {
        fabricsData = projectData.fabrics.map((fab) => {
            return {
                fabric_id: fab.fabric_id,
                quantity: fab.quantity.toString()
            }
        })
    }
    //add new fabric to array
    fabricsData.push({ fabric_id: fabric_id, quantity: (quantity) ? quantity : "0" })
    try {
        //try to update project with new fabric
        let res = await axios({
            method: 'PATCH',
            url: `${API_URL}/api/projects/${project_id}`,
            data: { fabrics: fabricsData },
            headers: {
                'x-auth-token': cookies.token || ""
            }
        })
        return true;
    } catch (err) {
        if (err instanceof AxiosError)
            throw new Error((err.response) ? err.response.data.message : "Error in adding fabric")
        throw new Error("Error in adding fabric")
    }
}

async function createNewFabric(cookies: any, type: string | null, color: string | null): Promise<IFabric> {
    let fabricData: { type: string, color: string } = {
        type: (type) ? type : "",
        color: (color) ? color : ""
    };
    try {
        //try to create new fabric
        let res = await axios({
            method: 'POST',
            url: `${API_URL}/api/fabrics`,
            data: fabricData,
            headers: {
                'x-auth-token': cookies.token || ""
            }
        })
        return res.data.data[0];
    } catch (err) {
        if (err instanceof AxiosError)
            throw new Error((err.response) ? err.response.data.message : "Error in adding fabric")
        throw new Error("Error in adding fabric")
    }
}

async function addRhinestoneToProject(project_id: string, rhinestone_id: string, amount: string | null, cookies: any): Promise<boolean> {
    //add project_id to cookies
    cookies.project_id = project_id;
    //get project data
    const projectData = await getUserProject(cookies);

    let stonesData: { rhinestone_id: string, amount: string }[] = [];
    //create array of existing fabric
    if (projectData.rhinestones) {
        stonesData = projectData.rhinestones.map((stone) => {
            return {
                rhinestone_id: stone.rhinestone_id,
                amount: stone.amount.toString()
            }
        })
    }
    //add new fabric to array
    stonesData.push({ rhinestone_id: rhinestone_id, amount: (amount) ? amount : "0" })
    try {
        //try to update project with new fabric
        let res = await axios({
            method: 'PATCH',
            url: `${API_URL}/api/projects/${project_id}`,
            data: { rhinestones: stonesData},
            headers: {
                'x-auth-token': cookies.token || ""
            }
        })
        return true;
    } catch (err) {
        if (err instanceof AxiosError)
            throw new Error((err.response) ? err.response.data.message : "Error in adding fabric")
        throw new Error("Error in adding fabric")
    }
}

async function createNewRhinestone(cookies: any, type: string | null, color: string | null, size:string|null): Promise<IRhinestone> {
    let stoneData: { type: string, color: string, size:string } = {
        type: (type) ? type : "",
        color: (color) ? color : "",
        size: (size)? size: "",
    };
    try {
        //try to create new fabric
        let res = await axios({
            method: 'POST',
            url: `${API_URL}/api/stones`,
            data: stoneData,
            headers: {
                'x-auth-token': cookies.token || ""
            }
        })
        return res.data.data[0];
    } catch (err) {
        if (err instanceof AxiosError)
            throw new Error((err.response) ? err.response.data.message : "Error in adding fabric")
        throw new Error("Error in adding fabric")
    }
}

export { login, register, getUserProjects, getUserProject, getFabricById, getRhinestoneById,
     getAllFabrics, getAllRhinestones, getUserData, addFabricToProject, createNewFabric,
    addRhinestoneToProject, createNewRhinestone
};