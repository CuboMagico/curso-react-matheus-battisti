import { useState } from "react"

function Condicional () {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    
    const apagarEmail = () => {
        setUserEmail("")
    }

    const cadastrarEmail = (event) => {
        event.preventDefault()
        setUserEmail(email)
    }


    return (
        <div>
            <h2>Cadastre seu email</h2>
                <input id="email" type="email" placeholder="Insira seu email" onChange={(e) => setEmail(e.target.value)}/>

                <button onClick={cadastrarEmail}>Cadastrar</button>
                
                {userEmail && (
                    <div>
                        <p>O email do Usuário é {userEmail}</p>
                        <button onClick={apagarEmail}>Apagar email</button>
                    </div>
                )}
        </div>
    )
}

export default Condicional