export const addStoreAndAggregatedProfit = (storesList, storeToAdd) => {
    const existingOnlineStore = storesList.find(
        store => store.onlineStore === storeToAdd.onlineStore
    );

    if (existingOnlineStore) {
        return storesList.map(store =>
            store.onlineStore === storeToAdd.onlineStore
                ? {...store, sum: store.sum + storeToAdd.price}
                : store
        )
    }

    return [...storesList, {...storeToAdd, sum: storeToAdd.price}]
};
