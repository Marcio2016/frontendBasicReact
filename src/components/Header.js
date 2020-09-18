import React from 'react'
/**
 * Propriedades
 * @param {*} props 
 * as propriedades também podem ser desestruturadas
 */
export default function Header({title,children}) {
    return (
        <header>
            <h1>{title}</h1>
            {children}
        </header>
    )
}