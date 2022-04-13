import styles from "./Project.module.css"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import Loading from "../../layout/Loading/Loading"
import Container from "../../layout/Container/Container"

import ProjectForm from "../../Project/ProjectForm/ProjectForm"

import Message from "../../layout/Message/Message"

const Project = () => {

    const { id } = useParams()

    const [project, setProject] = useState({})
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [message, setMessage] = useState({});

    const getProject = async () => {
        const data = await fetch(`http://localhost:5000/projects/${id}`,{
            method : "GET",
            headers : {
                "Content-Type" : "application/json"
            }
        }).then()
        const json = await data.json()

        setProject(json)
    }

    const updateProject = async (project) => {
        if (project.budget < project.cost) {
            setMessage({body : "Não é possível que o custo do projeto seja maior que seu orçamento", type : "error"})
            return false
        }

        try {
            await fetch(`http://localhost:5000/projects/${project.id}`, {
                method : "PATCH",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(project)
            }).then()

            setProject(project)
            setShowProjectForm(false)
            setMessage({body : "Projeto atualizado com sucesso!", type : "success"})

        } catch (error) {
            console.log(error)
        }

    }

    const toggleProjectForm = () => {
        setShowProjectForm(!showProjectForm)
    }
    
    useEffect(() => {
        setTimeout(() => {
            getProject()
        }, 1000)
    }, [id])

    return (
        <div className={`${styles.project_details}`}>
            {project.name ? (
                <Container customClass="column">

                    {message && <Message message={message.body} type={message.type} />}

                    <div className={`${styles.details_container}`}>
                       <h1>Projeto: {project.name}</h1>
                       <button className={`${styles.btn}`} onClick={toggleProjectForm}>
                           {!showProjectForm ? "Editar Projeto" : "Fechar"}
                        </button>

                        {!showProjectForm ? (
                            <div className={`${styles.project_info}`}>
                                <p>
                                    <span>Categoria:</span> {project.category.name}
                                </p>
                                <p>
                                    <span>Total de Orçamento:</span> R${project.budget}
                                </p>
                                <p>
                                    <span>Total utilizado:</span> R${project.cost}
                                </p>
                            </div>
                        ) : (
                            <div className={`${styles.project_info}`}>
                                <ProjectForm handleSubmit={updateProject} btnText="Concluir Edição" projectData={project} />
                            </div>
                        )}
                    </div>
                </Container>
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default Project