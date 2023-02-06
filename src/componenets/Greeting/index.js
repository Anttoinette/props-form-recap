import { useState } from "react"

export default function Greeting() {
    const [name, setName] = useState('Default')

    return (
        <>
            Hi my name is {name || 'Default2'} 
            <button onClick={ () => setName('Dolce')}>Change</button>
        </>
    )
}