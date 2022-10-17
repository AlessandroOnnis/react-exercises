export function Colors(props){
    return (
    <ul>
        {props.colors.map((item) => (<li key={item[0]}>{item}</li>))}
    </ul>
    )
}