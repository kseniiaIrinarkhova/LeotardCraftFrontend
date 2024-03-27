import { Badge, Card, Col, ListGroup, Row } from 'react-bootstrap'
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
    return (
        <Card style={{ width: '13rem' }}>
            <ListGroup variant="flush">
                <ListGroup.Item><Row><Col xs={5}><Badge bg="secondary">Type:</Badge></Col><Col> {fabricInfo.type}</Col></Row></ListGroup.Item>
                <ListGroup.Item><Row><Col xs={5}><Badge bg="secondary">Color:</Badge></Col><Col> {fabricInfo.color}</Col></Row></ListGroup.Item>
                <ListGroup.Item><Row><Col xs={5}><Badge bg="secondary">Quantity:</Badge></Col><Col> {fabric.quantity}</Col></Row></ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default ProjectFabricCard