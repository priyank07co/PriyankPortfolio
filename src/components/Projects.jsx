import project1 from "../assets/voting.png"
import project2 from "../assets/portfolio.png"
import project3 from "../assets/movie.png"
import project4 from "../assets/wanderlust.png"
import { Container,Row,Col,Tab } from "react-bootstrap"
import ProjectCard from "./ProjectCard"
import 'animate.css'
import TrackVisibility from 'react-on-screen'


export default function Projects(){
    const projects=[
        {
            title:"Online Voting System",
            description:"Designed using Html,Css,Xml",
            imgUrl:project1,
        },
        {
            title:"Portfolio",
            description:"Designed using react",
            imgUrl:project2,
        },
        {
            title:"BookMyMovie",
            description:"Designed using html,css,javascript,MySql",
            imgUrl:project3,
        },
        {
            title:"The Grapeyard",
            description:"Designed using html,css,javascript,nodejs,express,Mongodb with proper authentication",
            imgUrl:project4,
        },
    ];
    return(
        <section>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>My Some of Pratical Experminent is Below.</p>
                        <Tab.Container id="projectss-tabs">
                            <Tab.Content>
                                <Row>
                                    {
                                        projects.map((project,index)=>{
                                            return(
                                                <ProjectCard key={index} {...project}/>
                                            )
                                        })
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