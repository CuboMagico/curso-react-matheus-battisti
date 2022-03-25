import styles from "./NewProject.module.css"

import ProjectForm from "../../Project/ProjectForm/ProjectForm";

const NewProject = () => {
    return (
        <div className={`${styles.newproject_container}`}>
            <h1>Crie um novo projeto</h1>
            <p>Crie seu projeto para então adicionar serviços</p>
            <ProjectForm btnText="Criar projeto" />
        </div>
    )
}

export default NewProject;