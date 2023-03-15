import styles from './Person.module.css'

function Person({nome, idade, profissao, foto}) {
    return (
        <div className={styles.PersonContainer}>
            <img className={styles.img} src={foto} alt={nome}/>
            <h2 className={styles.Nome}>Nome: {nome}</h2>
            <p className={styles.Atributos}>Idade: {idade}</p>
            <p className={styles.Atributos}>Profissão: {profissao}</p>
        </div>
    )
}

export default Person
