import styles from "./Pessoa.module.css";

const Pessoa = ({ nome, profissao, idade, foto}) => {
    return (
        <>
            <img src={foto} alt={nome} />
            <p className={styles.pNome}>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </>
    )
}

export default Pessoa;