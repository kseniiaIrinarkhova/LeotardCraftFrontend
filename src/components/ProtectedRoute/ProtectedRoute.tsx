import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth/auth.context";

const ProtectedRoute = () => {
    const { cookies } = useAuth();
    console.log(cookies)
    return (
        (cookies.is_authorized) ? <Outlet /> : <h1>You are not authorized to view this page</h1>
    )
}

export default ProtectedRoute