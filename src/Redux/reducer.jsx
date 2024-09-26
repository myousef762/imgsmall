
const initialState = {
    cart: [],
    cartTotal: 0,
}

export const reducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch (type) {


        case 'ADD_TO_CART':{
            let newCart = [ ...state.cart ]
            if(newCart.length > 0){
                let i = newCart.findIndex(x => x.id === payload.id)
                if(i >= 0){
                    newCart[i] = { ...newCart[i], amount: newCart[i].amount + 1 }
                }else {
                    newCart.push({...payload, amount: 1})
                }
            }else {
                newCart.push({...payload, amount: 1})
            }
            return{ ...state,
                    cart: newCart,
                    cartTotal: state.cartTotal + payload.new_price}
        }



        case 'INCREASE_PRODUCT_AMOUNT': {
            payload.amount++;
            return{ ...state,
                    cartTotal: state.cartTotal + payload.new_price}
        }



        case 'DICREASE_PRODUCT_AMOUNT': {
            payload.amount--;
            return{ ...state,
                    cartTotal: state.cartTotal - payload.new_price}
        }
            
    

        case 'REMOVE_PRODUCT': {
            return{ ...state,
                    cart: state.cart.filter(el => el.id !== payload.id),
                    cartTotal: state.cartTotal - (payload.amount*payload.new_price)}
        }


        default:
            return state
    }
}