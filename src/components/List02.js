function List02({ itens }) {

    return (
        <>
            <h3>Lista de tecnologias de desenvolvimento de software</h3>

            {/* UTILIZAÇÃO DE CONDICIONAL TERNÁRIO PARA TESTAR SE HÁ ITENS NO ARRAY OU NÃO, TRATAMENTO PARA IMPRIMIR LISTA COM 'ERRO */}

            {/* tamanho da lista > || < "? (if)" condição verdadeira ":" condição falça */}

            {itens.length > 0 ? (
                itens.map((item, index) => (       // Sem a chave(key), pode gerar um erro, pois quando usa-se 'map' é necesário indexar o id do objeto. como nesse caso não é um objeto ussasse desta maneira.
                <p key={index} >{item}</p>
            ))) : (<p>Não há itens na lista</p>)
            }
        </>
    )

}

export default List02
