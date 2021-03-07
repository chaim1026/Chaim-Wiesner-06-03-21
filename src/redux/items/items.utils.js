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

    const purchased = [...itemsList, {...itemToAdd, quantity: 1}]

    console.log(purchased)
    const sortedItems = purchased.sort((a, b) => 
    a.deliveryDate.split('/').reverse().join().localeCompare(b.deliveryDate.split('/').reverse().join()));

    return sortedItems
};