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
import { addFabricToProject } from "./utils/api_connection";

const CustomRouterProvider = () => {
    const { cookies } = useAuth();

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
                            loader: async () => {
                                return Account.loader(cookies);
                            },
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
                                    loader: makeLoader(async ({ params }) => {
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
                                            }
                                        },
                                        {
                                            path: "/projects/:id/fabrics/add",
                                            loader: makeLoader(async ({ request }) => {
                                                //get url from get method of form
                                                let url = new URL(request.url);
                                                let project_id = url.pathname.split('/')[2]

                                                //form sends stateCode parameters
                                                let fabric_id = url.searchParams.get("fabric_id");
                                                let quantity = url.searchParams.get("quantity");

                                                if (fabric_id !== null) {
                                                    let result = await addFabricToProject(project_id, fabric_id, quantity, cookies)
                                                    if(result){
                                                        //redirect to project
                                                        return redirect(`/projects`);
                                                    }
                                                    else{
                                                        return redirect(`/`);
                                                    } 
                                                    
                                                }

                                            })
                                        },
                                        {
                                            path: '/projects/:id/rhinestones',
                                            Component: Rhinestones,
                                            loader: async () => {
                                                return Rhinestones.loader(cookies);
                                            },
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

