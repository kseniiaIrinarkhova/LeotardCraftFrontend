import { Outlet } from "react-router-dom"

type Props = {}

const Projects = (props: Props) => {
    return (
        <>
            <h1>Projects</h1>
            <Outlet />
            <h3>Projects menu</h3>
        </>
    )
}

export default Projects