import react from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import styled from 'styled-components'
import ItemCount from './ItemCount';

const Item = ({ product}) => {    
    return (
        <Wrapper>
            <div className='container'>
                <h4>$ {product.price}</h4>
                <img src={product.pictureURL} alt={product.title} />
                <h5>{product.title}</h5>
                <h6>{product.description}</h6>
                <button className='btn'>ver detalle</button>          
                <ItemCount initial={1} stock={5}/>  
            </div>       
        </Wrapper>
    )
}
const Wrapper = styled.div`
.container{
    margin: 3% 3%;
    border-radius: 3%;
    align-items: center;
    width: fit-content;
    text-align: center;
    background-color: var(--clr-primary-9);
    padding:2% 2%;
    
}
/* .buttons-wrapper{
    display: flex;
    justify-content: space-around;
    padding:2% 2%;
    
} */
`
export default Item