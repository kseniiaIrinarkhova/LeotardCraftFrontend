import { Outlet } from "react-router-dom"
// import { getProjectContext } from "../../context/project/project.context"
import { makeLoader, useLoaderData } from "react-router-typesafe";
import { getUserProject } from "../../utils/api_connection";
import { IProject } from "../../vite-env";

type Props = {}

const loader = makeLoader(async (cookies:any): Promise<IProject | Response> => {
    
    try {
        const project = await getUserProject(cookies);
        console.log(project)
        return project
    }
    catch (err) {
        console.log(err)
        throw new Response("Not Found", { status: 404 });
    }
});

const Project = (props: Props) => {
    let project = useLoaderData() as IProject;

    return (<>
        <h1 className="text-center">{project.title}</h1>
        <Outlet />
    </>
    )
}
Project.loader=loader;

export default Project