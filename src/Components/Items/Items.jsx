import React from 'react'
import './Items.css'
import {useDispatch} from 'react-redux'
import { dicreaseProductAmountAction, increaseProductAmountAction, removeProductAction } from '../../Redux/actions'
import { addToCartAction } from '../../Redux/actions';
import all_product from '../Assets/all_product';

export const Items = (props) => {

    
    const dispatch = useDispatch();
    const addToCart = (i) => {
        const [product] = all_product.filter(el => el.id === i)
        dispatch(addToCartAction(product))
    }

    const increaseProductAmount = (p) => {
        dispatch(increaseProductAmountAction(p))
    }
    const dicreaseProductAmount = (p) => {
        dispatch(dicreaseProductAmountAction(p))
    }
    const removeProduct = (p) => {
        dispatch(removeProductAction(p))
    }

return (
    <div className='item'>
        <img src={props.image} alt='' />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-old">
                ${props.old_price}
            </div>===&gt;
            <div className="item-price-new">
                ${props.new_price}
            </div>
        </div>
            {props.fromCart ? 
            <div>
                <h3><span style={{color: 'red', marginRight: '50px'}} >Amount: ({props.product.amount}) </span> <span>Total Price: ${props.product.amount*props.product.new_price}</span></h3>
                <div className="actions">
                    <button className='btn success' onClick={()=>increaseProductAmount(props.product)}>+</button>
                    <button className='btn primary' onClick={()=>removeProduct(props.product)}>Remove</button>
                    <button className='btn danger' onClick={()=>{
                        props.product.amount > 1 ? dicreaseProductAmount(props.product) : removeProduct(props.product); 
                    }}>-</button>
                </div>
            </div> 
            :
            <div className="item-cart-button">
                <button className="btn danger" onClick={()=>addToCart(props.id)}>
                Add To Cart
                </button>
            </div>}

        
    </div>
)
}
