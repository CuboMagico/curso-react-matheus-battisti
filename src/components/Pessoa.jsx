const Pessoa = ({ nome, profissao, idade, foto}) => {
    return (
        <>
            <img src={foto} alt={nome} />
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </>
    )
}

export default Pessoa;