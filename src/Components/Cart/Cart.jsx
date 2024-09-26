import React from 'react'
import { useSelector } from 'react-redux'
import { Items } from '../Items/Items'

const Cart = () => {



    const {cart, cartTotal} = useSelector(state => state)


return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
            <h2>Total Price: {cartTotal}</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', width: '90%', margin: '20px auto'}}>
        {cart.map((product, i) => {
            return(
                <div key={product.id}>
                <Items fromCart={true} key={i}
                        id={product.id}
                        name={product.name} 
                        image={product.image} 
                        new_price={product.new_price} 
                        old_price={product.old_price} 
                        product={product} />
            </div>
            )
        })}
        </div>
    </div>
)
}

export default Cart