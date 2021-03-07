export const addItemToDeliveredList = (deliveredItemsList, itemToAdd) => {
    const existingItem = deliveredItemsList.find(
        item => item.id === itemToAdd.id
    );

    if (existingItem) {
        return deliveredItemsList.map(item => 
            item.id === itemToAdd.id
                ? {...item, quantity: item.quantity + 1}
                : item
        )
    }

    return [...deliveredItemsList, {...itemToAdd, quantity: 1}]
};