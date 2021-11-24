export const addItemToCart = ( origItems , newItem ) => {
    const existingCartItem = origItems.find(
        origItems => origItems.id === newItem.id
    );
    
    if(existingCartItem){
        return origItems.map(
            origItem => origItem.id === newItem.id ? { ...origItem , quantity : origItem.quantity+1 } : origItem
        )
    }

    return [...origItems, { ...newItem, quantity: 1 }];
}

export const removeItemfromCart = ( origItems , removeItem ) => {
    const existingCartItem = origItems.find(
        origItems => origItems.id === removeItem.id
    );

    if(existingCartItem.quantity === 1){
        return origItems.filter( cartItem =>  cartItem.id !== removeItem.id )
    }

    return origItems.map(
        origItem => origItem.id === removeItem.id ? { ...origItem , quantity : origItem.quantity-1 } : origItem
    )

}
