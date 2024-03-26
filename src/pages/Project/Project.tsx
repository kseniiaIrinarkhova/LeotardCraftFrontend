import { Outlet } from "react-router-dom"
import { makeLoader, useLoaderData } from "react-router-typesafe";
import { getUserProject } from "../../utils/api_connection";
import { IProject } from "../../vite-env";



const loader = makeLoader(async (cookies:any): Promise<IProject | Response> => {
    
    try {
        const project = await getUserProject(cookies);
        return project
    }
    catch (err) {
        throw new Response("Not Found", { status: 404 });
    }
});

const Project = () => {
    let project = useLoaderData() as IProject;

    return (<>
        <h1 className="text-center">{project.title}</h1>
        <Outlet />
    </>
    )
}
Project.loader=loader;

export default Project