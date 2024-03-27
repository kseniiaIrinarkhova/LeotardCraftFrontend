import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth/auth.context";

const ProtectedRoute = () => {
    const { cookies } = useAuth();
    return (
        (cookies.is_authorized) ? <Outlet /> : <h3>You are not authorized to view this page</h3>
    )
}

export default ProtectedRoute