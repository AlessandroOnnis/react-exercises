export function Sum({numbers=[12, 24,38]}){
    return <h1>{ numbers.reduce((a, b) =>  a + b)}</h1>
}