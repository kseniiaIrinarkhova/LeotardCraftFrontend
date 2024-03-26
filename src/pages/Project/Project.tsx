import { Outlet } from "react-router-dom"
import { getProjectContext } from "../../context/project/project.context"

type Props = {}

const Project = (props: Props) => {
    let project = getProjectContext();

    return (<>
        <h1 className="text-center">{project.title}</h1>
        <Outlet />
    </>
    )
}

export default Project