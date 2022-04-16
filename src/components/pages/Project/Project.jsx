import styles from "./Project.module.css"

import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { parse, v4 as uuidv4 } from "uuid"

import Loading from "../../layout/Loading/Loading"
import Container from "../../layout/Container/Container"
import Message from "../../layout/Message/Message"

import ProjectForm from "../../Project/ProjectForm/ProjectForm"

import ServiceForm from "../../Service/ServiceForm/ServiceForm"


const Project = () => {

    const { id } = useParams()

    const [project, setProject] = useState({})
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
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
        setServices(json.services)
    }

    const updateProject = async (project, successMessage = {body : "Projeto atualizado com sucesso", type : "success"}) => {
        
        setMessage({})

        if (project.budget < project.cost) {
            setMessage({body : "Não é possível que o orçamento do projeto seja menor que seu custo", type : "error"})
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
            setMessage(successMessage)

        } catch (error) {
            console.log(error)
        }

    }

    const toggleProjectForm = () => {
        setShowProjectForm(!showProjectForm)
    }

    const toggleServiceForm = () => {
        setShowServiceForm(!showServiceForm)
    }

    const createService = (project) => {

        setMessage({})

        const lastService = project.services[project.services.length - 1]
    
        lastService.id = uuidv4()

        const newCost = parseFloat(project.cost) + parseFloat(lastService.cost)
        const isNewCostHigherThanProjectBudget = newCost > parseFloat(project.budget)

        if (isNewCostHigherThanProjectBudget) {
            setMessage({body : "Orçamento ultrapassado, verifique o valor do serviço", type : "error"})
            project.services.pop()
            return false
        }

        project.cost = newCost

        updateProject(project, {body : "Serviço adicionado com sucesso!", type : "success"})
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

                    <div className={styles.service_form_container}>
                        <h2>Adicione um serviço</h2>
                        <button className={styles.btn} onClick={toggleServiceForm}>
                            {!showServiceForm ? "Adicionar Serviço" : "Fechar"}
                        </button>
                        <div className={styles.project_info}>
                            {showServiceForm && (
                                <ServiceForm handleSubmit={createService} txtBtn="Criar Serviço" project={project}/>
                            )}
                        </div>
                    </div>

                    <h2>Serviços</h2>
                    <Container customClass="start">
                        {services ? services.map((service) => (
                                <div>
                                    <h2>{service.name}</h2>
                                    <p>{service.description}</p>
                                </div>
                                
                            )) : (
                            <p>Não há serviços cadastrados</p>
                        )}
                    </Container>
                </Container>
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default Project