import { useMemo } from "react"

export function FilteredList({persone}){
    const admitted = useMemo(()=> persone.map(p => p.age>=18 && <li key={p.id}>{p.age}-{p.nome}</li>), [persone])

    return <div>Studenti ammessi{admitted}</div>
}