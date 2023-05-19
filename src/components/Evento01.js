import styles from './Evento01.module.css'
import Button from './Button'

function Evento01() {

    function PlayEvento01() {
        console.log('Ativação em andamento!')    
    }

    function PlayEvento02() {
        console.log('Ativação em andamento, segundo evento!')
    }

    return(
        <div className={styles.divEvento}>
            {/* <p className={styles.pEvento01} >Clique para disparar um evento!</p> */}
            <Button event={PlayEvento01} text='Evento por props'/>      {/* EVENTO POR PROPS, SET NO BUTTON E CRIA UM BOTÃO QUE NÃO ESPECIFICA O EVENTO, MAS QUANDO REFERENCIA A PROPS(EVENTO) NO COMPONENTE PAI ELE EXCECUTA CONFORMA A FUNÇÃO */}
            <Button event={PlayEvento02} text='Evento por props 02'/>
            {/* <button className={styles.buttonEvento01} onClick={PlayEvento01} >Click me</button> */}
        </div>
    )
}

export default Evento01
