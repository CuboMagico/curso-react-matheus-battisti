import { useLocation } from "react-router-dom"

import Message from "../../layout/Message/Message"
import Container from "../../layout/Container/Container"
import LinkButton from "../../layout/LinkButton/LinkButton"

import styles from "./Projects.module.css"

const Projects = () => {

    const location = useLocation()
    let message = ""

    if (location.state) {
        message = location.state.message
    }

    return (
        
        <div className={`${styles.project_container}`}>
            <div className={`${styles.title_container}`}>
                <h1>Esses são os projetos cadastrados</h1>
                <LinkButton to="/novoprojeto" text="Criar projeto" />
            </div>

            <Container customClass="start">
                <p>Projetos</p>
            </Container>

            {message && <Message message={message} type="success" /> }
        </div>
    
    )
}

export default Projects 