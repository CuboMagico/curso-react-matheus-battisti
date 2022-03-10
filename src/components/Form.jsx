import { useState } from "react"

import Condicional from "./Condicional"

const Form = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    const cadastrarUsuario = (event) => {
        event.preventDefault()
        console.log("Usuário cadastrado!")
        console.log(name)
    }

    const preencherEmail = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const [name, setName] = useState()

    return (
        <div>
            <h1>Preencha com seus dados</h1>
            <form onSubmit={preencherEmail}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input id="name" type="text"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text"/>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input id="password" type="text"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>

            <Condicional email={email} />
        </div>
    )
}

export default Form