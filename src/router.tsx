import { makeLoader, redirect, typesafeBrowserRouter } from "react-router-typesafe";

//pages and components
import App from "./App";
import ErrorPage from "./pages/Error/Error";
import Index from "./pages/Index/App/Index";
import Auth from "./pages/Auth/Auth";
import Account from "./pages/Account/Account";
import Projects from "./pages/Projects/Projects";
import IndexProjects from "./pages/Index/Projects/Index";
import IndexProject from './pages/Index/Project/Index';
import Project from "./pages/Project/Project";
import Fabrics from "./pages/Fabrics/Fabrics";
import Rhinestones from "./pages/Rhinestones/Rhinestones";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { ProjectProvider } from "./context/project/project.context";
import { useAuth } from "./context/auth/auth.context";
import { RouterProvider } from "react-router-dom";

const CustomRouterProvider = ()=>{
    const {cookies} = useAuth();

    const { router, href } = typesafeBrowserRouter([
        {
            path: "/",
            Component: App,
            errorElement: <ErrorPage />,
            children: [
                { index: true, Component: Index },
                {
                    path: '/auth',
                    Component: Auth
                },

                {
                    element: <ProtectedRoute />,
                    children: [
                        {
                            path: '/account',
                            Component: Account
                        },
                        {
                            path: '/projects',
                            element: <ProjectProvider><Projects /></ProjectProvider>,
                            loader: async () => {
                               return Projects.loader(cookies);
                            },
                            children: [
                                { index: true, Component: IndexProjects },
                                {
                                    path: '/projects/:id',
                                    Component: Project,
                                    loader: makeLoader(async ({params}) => {
                                        let newParam = { ...cookies };
                                        newParam.project_id = params.id
                                        return Project.loader(newParam);
                                    }),
                                    children: [
                                        {
                                            index: true, Component: IndexProject 
                                        },
                                        {
                                            path: "/projects/:id/fabrics",
                                            Component: Fabrics,
                                            loader: async () => {
                                                return Fabrics.loader(cookies);
                                            },
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

                }

            ]
        },


    ]);
return (
    <RouterProvider router={router} />
);

}

export default CustomRouterProvider;

