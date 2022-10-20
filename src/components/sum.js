export function Sum({numbers=[12, 24,38]}){
    return <h1 className="sum">Total users: { numbers.reduce((a, b) =>  a + b)}</h1>
}