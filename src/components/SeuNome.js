// componente que altera

function SeuNome({ setNome}) {
    // define a variável no elelemtn pai -> App.js
    return (
        <div>
            <p>Digite seu nome:</p>
            <input type="text" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)}/>
            {/* // adiciona evento para cionar o input, que sera exibido no componente Saudacao() */}
        </div>    
    )
}

export default SeuNome
