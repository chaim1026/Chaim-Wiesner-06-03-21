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

    const purchased = [...deliveredItemsList, {...itemToAdd, quantity: 1}]

    const sortedItems = purchased.sort((a, b) => 
    a.deliveryDate.split('/').reverse().join().localeCompare(b.deliveryDate.split('/').reverse().join()));

    return sortedItems
};
