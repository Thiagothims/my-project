//componente que usa

function Saudacao({ nome }) {

    function gerarSaudacao(algumNome) {
        return `Olá ${algumNome}, seja bem vindo ao React!`
    }


    return <>{nome && <p>{gerarSaudacao(nome)}</p>}</> // se exisitr nome, excute a função 'gerarSaudacao()' CONDICIONAL

}

export default Saudacao


// Cria um novo componente para ser componente filho ou irmao no compoenente SeuNome, auxiliando para renderizar