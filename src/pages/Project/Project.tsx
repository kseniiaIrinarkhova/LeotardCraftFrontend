import { Outlet } from "react-router-dom"

type Props = {}

const Project = (props: Props) => {
    return (<>
        <h1>Project Page</h1>
        <Outlet />
    </>
    )
}

export default Project