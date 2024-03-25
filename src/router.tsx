import {  typesafeBrowserRouter } from "react-router-typesafe";

//pages and components
import App from "./App";
import ErrorPage from "./pages/Error.page";
import Index from "./pages/Index.page";
import Auth from "./pages/Auth.page";
import Account from "./pages/Account.page";
import Projects from "./pages/Projects.page";
import IndexProjects from "./pages/IndexProjects.page";
import Project from "./pages/Project.page";
import Fabrics from "./pages/Fabrics.page";
import Rhinestones from "./pages/Rhinestones.page";

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