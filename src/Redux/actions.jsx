
export const addToCartAction = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    }
}
export const increaseProductAmountAction = (p) => {
    return {
        type: 'INCREASE_PRODUCT_AMOUNT',
        payload: p,
    }
}
export const dicreaseProductAmountAction = (p) => {
    return {
        type: 'DICREASE_PRODUCT_AMOUNT',
        payload: p,
    }
}
export const removeProductAction = (p) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: p,
    }
}