import PropTypes from 'prop-types'

function Item({estudo, assunto}) {
    return (
        <>
            <li>{estudo} : {assunto}</li>
        </>
    )
}

Item.propTypes = {              // define a tipagem
    estudo: PropTypes.string.isRequired, // isRequired valida (tem que inserir, obrigatoriedade) // ProtoType define qual tipo de input
    assunto: PropTypes.string
}

Item.defaultProps = {           // define como padrão uma resposta caso não seja inserido um prop
    estudo: '*Sem estudos*',
    assunto: ' '
}

export default Item
