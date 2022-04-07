import styles from "./ProjectCard.module.css"

import { BsPencil, BsFillTrashFill } from "react-icons/bs"

import { Link } from "react-router-dom"


const ProjectCard = ({ project }) => {
    return (
        <div className={`${styles.project_card}`}>
            <h4>{project.name}</h4>
            <p>
                <span>Orçamento:</span> R${project.budget}
            </p>
            <p className={`${styles.category_text}`}>
                <span className={`${styles[project.category.name.toLowerCase()] }`}></span> {project.category.name}
            </p>
            <div className={`${styles.project_card_actions}`}>
                <Link to="/"><BsPencil />Editar</Link>
                <button><BsFillTrashFill />Remover</button>
            </div>
        </div>
    )
}


export default ProjectCard