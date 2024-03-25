import {  typesafeBrowserRouter } from "react-router-typesafe";

//pages and components
import App from "./App";
import ErrorPage from "./pages/Error/Error";
import Index from "./pages/Index/App/Index";
import Auth from "./pages/Auth/Auth";
import Account from "./pages/Account/Account";
import Projects from "./pages/Projects/Projects";
import IndexProjects from "./pages/Index/Projects/Index";
import Project from "./pages/Project/Project";
import Fabrics from "./pages/Fabrics/Fabrics";
import Rhinestones from "./pages/Rhinestones/Rhinestones";

const { router, href } = typesafeBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <ErrorPage />,
        children: [
            {index:true, Component: Index},
            {
                path: '/auth',
                Component: Auth
            },
            {
                path: '/account',
                Component: Account
            },
            {
                path: '/projects',
                Component: Projects,
                children: [
                    { index: true, Component: IndexProjects },
                    {
                        path: '/projects/:id',
                        Component: Project,
                        children: [
                            {
                                path: "/projects/:id/fabrics",
                                Component: Fabrics
                            },
                            {
                                path: '/projects/:id/rhinestones',
                                Component: Rhinestones
                            }
                        ],
                    }
                ]
            }
        ]
    },
   

]);


export { router, href }