import React from 'react'
/**
 * Propriedades
 * @param {*} props 
 * as propriedades também podem ser desestruturadas
 */
export default function Header({title}) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}