const Form = () => {
    
    const cadastrarUsuario = (event) => {
        event.preventDefault()
        console.log("Usuário cadastrado!")
    }

    return (
        <div>
            <h1>Preencha com seus dados</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input id="nome" type="text"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form