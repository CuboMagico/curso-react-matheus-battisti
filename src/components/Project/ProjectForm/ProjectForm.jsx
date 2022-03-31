import styles from "./ProjectForm.module.css"

import { useState, useEffect } from "react"

import Input from "../../form/Input/Input"
import Select from "../../form/Select/Select"
import Submit from "../../form/Submit/Submit"

const ProjectForm = ({ btnText, handleSubmit, projectData }) => {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || [])

    const submit = (event) => {
        event.preventDefault()
        handleSubmit(project)
    }

    const handleChange = (event) => {
        setProject({ ...project, [event.target.name]: event.target.value })
    }

    const handleCategory = (event) => {
        setProject({
            ...project,
            category: {
                id: event.target.value,
                name: event.target.options[event.target.selectedIndex].text
            }
        })
    }

    const categoriesRequest = async () => {
        const data = await fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        }).then()
        const json = await data.json()
        console.log("entrou")
        setCategories(json)
    }

    useEffect(() => {
        categoriesRequest()
    }, [])

    return (
        <form onSubmit={submit} className={`${styles.form}`} action="" method="POST">
            <Input handleOnChange={handleChange} value={project.name ? project.name : ""} type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" />
            <Input handleOnChange={handleChange} value={project.budget ? project.budget : ""} type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" />

            <Select handleChange={handleCategory} value={project.category ? project.category.id : ""} text="Selecione uma categoria" name="category" options={categories} />

            <Submit text={btnText} />
        </form>
    )
}

export default ProjectForm