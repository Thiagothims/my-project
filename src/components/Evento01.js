import styles from './Evento01.module.css'

function Evento01() {

    function PlayEvento01() {
        console.log('Ativação em andamento!')    
    }

    return(
        <div className={styles.divEvento}>
            <p className={styles.pEvento01} >Clique para disparar um evento!</p>
            <button className={styles.buttonEvento01} onClick={PlayEvento01} >Click me</button>
        </div>
    )
}

export default Evento01
