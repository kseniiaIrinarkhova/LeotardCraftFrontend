import axios, { AxiosError } from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

async function login(formData: any): Promise<String> {
    console.log("api_connections login")
    console.log(formData)
    try {
        let res = await axios({
            method: 'POST',
            url: `${API_URL}/api/users/login`,
            data: formData
        })
        console.log(res)
        if (res.data) return res.data.data[0].token
        else throw new Error((res.data.message) ? res.data.message : "Login error")
    } catch (err) {
        console.log(err)
        if(err instanceof AxiosError)
            throw new Error((err.response) ? err.response.data.message: "Error Status 500")
        throw new Error("500 (Internal Server Error)")
    }
}

async function register(formData: any): Promise<String> {
    let res = await axios({
        method: 'POST',
        url: `${API_URL}/api/users/register`,
        data: formData
    })
    if (res.data[0]) return res.data[0].token
    else throw new Error("Error with user registration")
}

export { login, register };