import { useNavigate } from "react-router-dom"

import styles from "./NewProject.module.css"

import ProjectForm from "../../Project/ProjectForm/ProjectForm";

const NewProject = () => {

    const navigate = useNavigate()

    const createPost = (project) => {

        project.cost = 0
        project.services = []

        const fetchPost = async () => {
            try {
                fetch("http://localhost:5000/projects",
                    {
                        method : "POST",
                        headers : {
                            "Content-type" : "application/json"
                        },
                        body : JSON.stringify(project)
                    }
                ).then()
    
                navigate("/projetos", { state : { message : "Projeto criado com sucesso!" } })
            
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchPost()

    }

    return (
        <div className={`${styles.newproject_container}`}>
            <h1>Crie um novo projeto</h1>
            <p>Crie seu projeto para então adicionar serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
        </div>
    )
}

export default NewProject;