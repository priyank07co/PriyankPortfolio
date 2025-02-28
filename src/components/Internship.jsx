import { Container,Row,Col,Tab } from "react-bootstrap"
import internship from "../assets/CRIS.jpg"
import ProjectCard from "./ProjectCard"

export default function Internship(){
    const pratice={
        title:"CRIS",
        description:"I work as a React Developer at CRIS(Centre railway of Information System)",
        imgUrl:internship,
    }
    return(
        <section>
            <Container >
                <Row>
                    <Col>
                        <h2>Intership</h2>
                        <p>I have done Intership at Centre railway of Information System</p>
                        <Tab.Container id="projectss-tabs">
                            <Tab.Content>
                                <Row>
                                    {
                                        <ProjectCard key={0} {...pratice}/>

                                    }
                                </Row>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}