import React, {useState} from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Search.module.css'
import Image from 'next/image'

export default function Search(){

    const [query, setQuery] = useState('')
    const router = useRouter()

    const handleSubmit = (event) => {
        event.preventDefault()
        // Lógica para lidar com a pesquisa aqui
        router.push(`/${query}`)
    }

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    return(
        <nav className={styles.navbar}>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Pesquisar...' value={query} onChange={handleChange} />
                <button type='submit'><Image src='/images/search.svg' height={24} width={24}/></button>
            </form>
        </nav>
    )
}