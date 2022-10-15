export function Sum(props){
    let result = props.numbers.reduce((a, b) =>  a + b)
    return <h1>{result}</h1>
}