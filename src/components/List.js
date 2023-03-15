import Item from "./Item"

function List() {
    return (
        <>
        <h2>Estudos em:</h2>
        <ul>
            <Item estudo='React' assunto='Coponentes'/>
            <Item estudo='React' assunto='Props'/>
            <Item estudo='React' assunto='defaultProps'/>
            <Item />  {/*caso não adicione as props, preencho com Item.defalutProps*/}
            <Item />
        </ul>
        </>
    )
}

export default List
