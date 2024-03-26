import { Card, ListGroup } from 'react-bootstrap'
import { IFabric, ProjectFabric } from '../../vite-env'
import { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth/auth.context'
import { getFabricById } from '../../utils/api_connection'

type Props = {
    fabric: ProjectFabric
}

const ProjectFabricCard = ({ fabric }: Props) => {
    const [fabricInfo, setFabricInfo] = useState({} as IFabric);
    const { cookies } = useAuth();

    async function getFabricInfo() {
        getFabricById(cookies, fabric.fabric_id)
            .then((fab: IFabric) => {
                setFabricInfo(fab)
            }

            )
            .catch((err: any) => {
                console.log(err)
            })
    }
    useEffect(()=>{
        getFabricInfo();
    },[])
    console.log(fabricInfo)
    return (
        <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
                <ListGroup.Item>{fabricInfo.type}</ListGroup.Item>
                <ListGroup.Item>{fabricInfo.color}</ListGroup.Item>
                <ListGroup.Item>{fabric.quantity}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default ProjectFabricCard