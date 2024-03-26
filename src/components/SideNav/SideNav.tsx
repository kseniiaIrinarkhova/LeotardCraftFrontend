import { useContext } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { IProject } from '../../vite-env'
import {  NavLink } from 'react-router-dom'
import { ProjectContext } from '../../context/project/project.context'

type Props = {
    projects: Array<IProject> | null
}

const SideNav = ({ projects }: Props) => {
    const { setProject } = useContext(ProjectContext);

    return (
        <Nav className="flex-column">
            <Nav.Item>
                <Nav.Link href="/newProject">Create New Project</Nav.Link>
            </Nav.Item>
            {
                (projects !== null && projects.length) ? (
                    <>
                        {
                            projects.map((pr: IProject) => (
                                <Nav.Item key={pr._id}>
                                    <Nav.Link as={NavLink} to={`/projects/${pr._id}`} onClick={() => { setProject({ ...pr}) }}>{pr.title}</Nav.Link>
                                </Nav.Item>
                            ))
                        }
                    </>
                ) : (<Navbar.Text> You do not have projects</Navbar.Text>)
            }

        </Nav>
    )
}

export default SideNav