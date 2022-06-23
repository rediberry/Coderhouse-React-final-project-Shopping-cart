import React from 'react'
import styled from 'styled-components'
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
    return (
    <div className= "item-container">
        <h3>{greeting}</h3>
        <ItemList/>
    </div>
    )
}

export default ItemListContainer