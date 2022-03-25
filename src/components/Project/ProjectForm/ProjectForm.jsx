import styles from "./ProjectForm.module.css"

import Input from "../../form/Input/Input"
import Select from "../../form/Select/Select"
import Submit from "../../form/Submit/Submit"

const ProjectForm = ({ btnText }) => {
    return (
        <form className={`${styles.form}`} action="" method="POST">
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto" />
            <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" />

            <Select text="Selecione uma categoria" name="category" />

            <Submit text={btnText} />
        </form>
    )
}

export default ProjectForm