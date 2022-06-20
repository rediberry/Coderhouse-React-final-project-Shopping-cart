import React from 'react'
import styled from 'styled-components'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
    return (
    <div className= "item-container">
        <h3>{greeting}</h3>
        <ItemCount stock='5' initial='1'/>
    </div>
    )
}

export default ItemListContainer