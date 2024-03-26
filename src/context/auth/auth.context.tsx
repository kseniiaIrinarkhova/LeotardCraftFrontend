
import { createContext, useContext, useMemo } from "react"
import { useCookies } from 'react-cookie';
import { login, register } from '../../utils/api_connection'
import ErrorPage from "../../pages/Error/Error";
import { getErrorMessage } from "../../utils/error.util";


interface IUserContext {
    cookies: { 
        token?: string; 
        is_authorized?: boolean;
        username?:string;
        [x: string]: any; } ;
    logIn: (formData: any) => void;
    logOut: () => void;
    signUp: (formData: any) => void;
}

interface IProps {
    children: React.ReactNode | React.ReactNode[];
}


const UserContext = createContext<IUserContext>({ cookies: {is_authorized:false}, logIn: () => { }, logOut: () => { }, signUp: () => { } })

const UserProvider: React.FC<IProps> = ({ children }: IProps) => {
    const [cookies, setCookie, removeCookie] = useCookies();

    const logIn = (formData: any) => {
        (async () => {
            try {
                const token = await login(formData);
                console.log(token);
                setCookie('token', token);
                setCookie('is_authorized',true);
                setCookie('username', formData.username);
            } catch (err) {
                throw new Error(getErrorMessage(err))
            }

        })();
    }


    const signUp = (formData: any) => {
        (async () => {
            try {
                const token = await register(formData)
                setCookie('token', token)
                setCookie('is_authorized', true);
                setCookie('username', formData.username);
            }
            catch (err) {
                throw err
            }
        })();
    }

    const logOut = () => {
        ['token'].forEach((obj) => { removeCookie(obj) });
        ['is_authorized'].forEach((obj) => { removeCookie(obj) });
        ['username'].forEach((obj) => { removeCookie(obj) });
        setCookie('is_authorized', false);
    }

    //do not rerender if cookies doesn't change
    const value = useMemo(() => ({ cookies, logIn, logOut, signUp }), [cookies])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

const useAuth = () => {
    return useContext(UserContext);
}

export { UserProvider, useAuth }