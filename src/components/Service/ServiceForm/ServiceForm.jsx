import styles from "../../Project/ProjectForm/ProjectForm.module.css"

import { useState } from "react"

import Input from "../../form/Input/Input"
import Submit from "../../form/Submit/Submit"

const ServiceForm = ({ handleSubmit, txtBtn, project }) => {

    const [service, setService] = useState({})

    const submit = event => {
        event.preventDefault()
        project.services.push(service)
        handleSubmit(project)
    }

    const handleChange = event => {
        setService({...service, [event.target.name] : event.target.value})
    } 

    return (
        <form method="POST" onSubmit={submit}>
            <Input type="text" text="Nome do serviço" name="name" placeholder="Insira o nome do serviço" handleOnChange={handleChange} />
            <Input type="number" text="Custo do serviço" name="cost" placeholder="Insira o custo do serviço" handleOnChange={handleChange} />
            <Input type="text" text="Descrição do serviço" name="description" placeholder="Insira a descrição do serviço" handleOnChange={handleChange} />

            <Submit text={txtBtn} />
        </form>
    )
}

export default ServiceForm