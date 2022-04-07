import { useLocation } from "react-router-dom"

import { useState, useEffect } from "react"

import Message from "../../layout/Message/Message"
import Container from "../../layout/Container/Container"
import LinkButton from "../../layout/LinkButton/LinkButton"
import Loading from "../../layout/Loading/Loading"

import ProjectCard from "../../Project/ProjectCard/ProjectCard"

import styles from "./Projects.module.css"


const Projects = () => {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    const getProjects = async () => {
        const data = await fetch("http://localhost:5000/projects", {
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        }).then()
        
        const json = await data.json()

        setProjects(json)
        setLoading(false)
    }
    
    const location = useLocation()
    let message = ""
    
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            getProjects()
        }, 2000)
    }, [])


    return (
        
        <div className={`${styles.project_container}`}>
            <div className={`${styles.title_container}`}>
                <h1>Esses são os projetos cadastrados</h1>
                <LinkButton to="/novoprojeto" text="Criar projeto" />
            </div>

            {message && <Message message={message} type="success" /> }

            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => <ProjectCard project={project}
                    />)
                }

                {loading && <Loading />}

                {!loading && projects.length === 0 && (
                    <p>Não há projetos cadastrados</p>
                )}
            </Container>
        </div>
    )
}

export default Projects