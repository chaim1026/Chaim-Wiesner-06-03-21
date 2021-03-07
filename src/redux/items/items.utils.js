export const addItemToItemsList = (itemsList, itemToAdd) => {
    const existingItem = itemsList.find(
        item => item.id === itemToAdd.id
    );

    if (existingItem) {
        return itemsList.map(item => 
            item.id === itemToAdd.id
                ? {...item, quantity: item.quantity + 1}
                : item
        )
    }

    return [...itemsList, {...itemToAdd, quantity: 1}]
};