import { useState } from 'react'

function Form() {

    function cadastrarUsuario(event) {
       // let nome = 
        event.preventDefault()                  // faz com que o form não envie para o backend, deixa imprimir no console, ferramenta para ver o return
        console.log(`Usuário ${name} foi cadastrado com sucesso!        
        // apresenta no console, mas o correto é enviar para o DB para efetivar
        Senha válida: ${password}`)
        
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h2>Meu cadastro</h2>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                    type="text"
                    placeholder="Digite seu nome"
                    id="name"
                    name="name"
                    // value={name} set para inicar o form com nome 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input
                    type="password"
                    placeholder="Digite sua senha"
                    id="password"
                    name="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value='Cadastrar' />
                </div>
            </form>
        </div>    
    )
}

export default Form
