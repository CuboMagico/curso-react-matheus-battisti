import Button from "./Button"

const Evento = ( { numero } ) => {
    
    const meuEvento = () => {
        console.log(`Opa, fui clicado!`)
    }
    
    return (
        <div>
            <p>Clicque para disparar um evento</p>
            <Button text="Esse evento é passado por props" event={meuEvento} />
        </div>
    )
}

export default Evento