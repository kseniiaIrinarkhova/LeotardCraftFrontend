import { Container, Row, Tab, Tabs } from "react-bootstrap";
import { getProjectContext } from "../../../context/project/project.context";
import ImgCarousel from "../../../components/ImgCarousel/ImgCarousel";
import ProjectFabrics from "../../../components/ProjectFabrics/ProjectFabrics";
import ProjectRhinestones from "../../../components/ProjectRhinestones/ProjectRhinestones";
import { Link } from "react-router-dom";

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
                            <Link to={`/projects/${project._id}/fabrics`}>Add new fabric to project</Link>
                            <ProjectFabrics fabrics={project.fabrics}/>
                        </Tab>
                        <Tab eventKey="rhinestones" title="rhinestones">
                            <Link to={`/projects/${project._id}/rhinestones`}>Add new rhinestones to project</Link>
                            <ProjectRhinestones rhinestones={project.rhinestones} />
                        </Tab>
                        <Tab eventKey="notes" title="notes">
                            Tab content for notes. Will be added later.
                        </Tab>
                    </Tabs>
            </Row>
        </Container>
            
        </>
    )
}

export default Index