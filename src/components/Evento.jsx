const Evento = ( { numero } ) => {
    
    const meuEvento = () => {
        console.log(`Opa, fui clicado! ${numero}`)
    }
    
    return (
        <div>
            <p>Clicque para disparar um evento</p>
            <button onClick={meuEvento}>Ativar Evento</button>
        </div>
    )
}

export default Evento