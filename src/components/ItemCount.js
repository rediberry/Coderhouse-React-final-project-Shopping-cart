import React from 'react'
import styled from 'styled-components';
import Swal from 'sweetalert2';

function ItemCount({stock, initial}) {
    const [cantidad, setCant] = React.useState(initial)
    const clickHandlerSuma = ()=>{
        cantidad<stock?setCant(parseInt(cantidad)+1):console.log(cantidad);
    }
    const clickHandlerResta = ()=>{
        cantidad>0?setCant(cantidad - 1):console.log(cantidad);
    }
    const onAdd = (cantidad) => {
        if(cantidad === 0){
                return
        }else{
            Swal.fire({
                title: 'Success!',
                text: `usted ha sumado ${cantidad} productos`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }       
    }
    return (
        <Wrapper>
        <div className='container'>
            <h4>Alpargata roja</h4>
            <img src="https://images.ctfassets.net/u7r20k5jit83/477Lu0wx23Vszs67x9wtjn/1c66d1afd7b07ab3a45624890ff61bb4/product_4.png?h=250" alt="Alpargata roja" />
            <h6>stock disponible: {stock} unidades</h6>
            <div className="buttons-wrapper">
            <button className='btn' onClick={clickHandlerResta}>-</button>
            <h4>{cantidad}</h4>
            <button className='btn' onClick={clickHandlerSuma}>+</button>
            </div>
            <button className='btn' onClick={() => onAdd(cantidad)}>agregar al carrito</button>
        </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.container{
    margin: 3% 3%;
    border-radius: 5%;
    align-items: center;
    max-width: 20%;
    text-align: center;
    background-color: var(--clr-primary-9);
    padding:2% 2%;
    
}
.buttons-wrapper{
    display: flex;
    justify-content: space-around;
    padding:2% 2%;
    
}
`
export default ItemCount