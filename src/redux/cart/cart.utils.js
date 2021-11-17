const addItemToCart = ( origItems , newItem ) => {
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

export default addItemToCart;