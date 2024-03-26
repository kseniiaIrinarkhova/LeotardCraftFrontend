import axios, { AxiosError } from 'axios';

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

export { login, register };