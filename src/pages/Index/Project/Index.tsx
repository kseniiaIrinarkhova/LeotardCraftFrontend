import { Container, Row, Tab, Tabs } from "react-bootstrap";
import { getProjectContext } from "../../../context/project/project.context";
import ImgCarousel from "../../../components/ImgCarousel/ImgCarousel";

const Index = () => {
    let project = getProjectContext();

    return (
        <>
        <Container>
            <Row className="h-35">
                    <h4>Project Images</h4>
                    {(project.imgs && project.imgs.length) ? <ImgCarousel imgs={project.imgs} /> : <p>Here could be project images</p>}
            </Row>
            <Row>
                    <Tabs
                        defaultActiveKey="fabrics"
                        className="mb-3"
                    >
                        <Tab eventKey="fabrics" title="fabrics">
                            Tab content for fabric
                        </Tab>
                        <Tab eventKey="rhinestones" title="rhinestones">
                            Tab content for rhinestones
                        </Tab>
                        <Tab eventKey="notes" title="notes">
                            Tab content for notes
                        </Tab>
                    </Tabs>
            </Row>
        </Container>
            
        </>
    )
}

export default Index