import React from 'react'
import styled from 'styled-components'
const ItemListContainer = ({greeting}) => {
    return (
    <div className= "item-container">
        <p>{greeting}</p>
    </div>
    )
}

export default ItemListContainer