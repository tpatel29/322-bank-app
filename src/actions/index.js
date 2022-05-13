export const addAccount = (name, balance) => {
    return {
        type: 'ADD_ACCOUNT',
        payload: {
            name, balance
        }
    };
};

export const removeAccount = (id) => {
    return {
        type: 'REMOVE_ACCOUNT',
        payload: {
            id
        },
    };
};
export const deposit = (id, transactionName, amount) => {
    return {
        type: 'DEPOSIT',
        payload: {
            id, transactionName, amount
        },
    };
};
export const withdraw = (id, transactionName, amount) => {

    return {
        type: 'WITHDRAW',
        payload: {
            id, transactionName, amount
        },
    };
};

