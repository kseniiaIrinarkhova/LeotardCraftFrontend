import { Outlet } from "react-router-dom"
import { makeLoader, useLoaderData } from "react-router-typesafe";
import { IProject } from "../../vite-env";
import { getUserProjects } from "../../utils/api_connection";
import SideNav from "../../components/SideNav/SideNav";
import { Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";
import { ProjectContext } from "../../context/project/project.context";

const loader = makeLoader(async (cookies:any): Promise<IProject[] | Response> => {
try{
    const projects = await getUserProjects(cookies) ;
    return projects
}
    catch(err){
    throw new Response("Not Found", { status: 404 });
    }
});


const Projects = () => {
    const projects = useLoaderData() as IProject[];
    return (
            <Container>
                <Row>
                    <Col xs={2}><SideNav projects={(projects !== null) ? projects : []} /></Col>
                    <Col><Outlet/></Col>
                </Row>
            </Container>
    )
}

Projects.loader = loader;
export default Projects