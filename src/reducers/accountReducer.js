const generateID = () => {
  return `${Date.now()}${Math.floor(Math.random() * 100)}`;
};
const DEFAULT_STATE  = {
  accounts: [{"_id": 1,"name": "Lannisters","balance": 1189.78},
        {"_id": 2,"name": "Starks","balance": 567.71},
        {"_id": 3,"name": "Baratheons","balance": 31.26},
        {"_id": 4,"name": "Targaryens","balance": 34.75},
        {"_id": 5,"name": "Greyjoys","balance": 9.03},
        {"_id": 6,"name": "Tyrells","balance": 1133.45},
        {"_id": 7,"name": "Martells","balance": 737.9},
        {"_id": 8,"name": "Tullys","balance": 483.56},
        {"_id": 9,"name": "Arryns","balance": 1035.83},
        {"_id": 10,"name": "Free Folk","balance": -134.34}],
  transactions: [{
"_id": 1,
"accountId": 1,
"type": "deposit",
"amount": 677.4,
"name": "Account Opened"
},
{
"_id": 2,
"accountId": 1,
"type": "deposit",
"amount": 1000,
"name": "Gold Mine Profits"
},
{
"_id": 3,
"accountId": 1,
"type": "withdraw",
"amount": 300,
"name": "Iron Bank Interest"
},
{
"_id": 4,
"accountId": 1,
"type": "withdraw",
"amount": 402.34,
"name": "Defenses of Kings Landing"
},
{
"_id": 5,
"accountId": 1,
"type": "deposit",
"amount": 214.72,
"name": "Taxes from Kingdoms"
},
{
"_id": 6,
"accountId": 2,
"type": "deposit",
"amount": 500,
"name": "Account Opened"
},
{
"_id": 7,
"accountId": 2,
"type": "deposit",
"amount": 120.34,
"name": "Taxes from bannermen"
},
{
"_id": 8,
"accountId": 2,
"type": "withdraw",
"amount": 204.23,
"name": "Sending Lord to Capital"
},
{
"_id": 9,
"accountId": 2,
"type": "withdraw",
"amount": 11.34,
"name": "Camping at Twins"
},
{
"_id": 10,
"accountId": 2,
"type": "deposit",
"amount": 162.94,
"name": "Spoils of War"
},
{
"_id": 11,
"accountId": 3,
"type": "deposit",
"amount": 934.36,
"name": "Account Opened"
},
{
"_id": 12,
"accountId": 3,
"type": "withdraw",
"amount": 394.95,
"name": "Younger Brother Rebelled"
},
{
"_id": 13,
"accountId": 3,
"type": "withdraw",
"amount": 183.48,
"name": "Attacked King's Landing"
},
{
"_id": 14,
"accountId": 3,
"type": "deposit",
"amount": 500,
"name": "Iron Bank Loan"
},
{
"_id": 15,
"accountId": 3,
"type": "withdraw",
"amount": 643.03,
"name": "Hire Mercenaries"
},
{
"_id": 24,
"accountId": 3,
"type": "withdraw",
"amount": 138.64,
"name": "Transit to Wall"
},
{
"_id": 16,
"accountId": 4,
"type": "deposit",
"amount": 34.75,
"name": "Account Opened"
},
{
"_id": 17,
"accountId": 5,
"type": "deposit",
"amount": 9.03,
"name": "Account Opened"
},
{
"_id": 18,
"accountId": 6,
"type": "deposit",
"amount": 1133.45,
"name": "Account Opened"
},
{
"_id": 19,
"accountId": 7,
"type": "deposit",
"amount": 737.9,
"name": "Account Opened"
},
{
"_id": 20,
"accountId": 8,
"type": "deposit",
"amount": 483.56,
"name": "Account Opened"
},
{
"_id": 21,
"accountId": 9,
"type": "deposit",
"amount": 1035.83,
"name": "Account Opened"
},
{
"_id": 22,
"accountId": 10,
"type": "deposit",
"amount": 0,
"name": "Account Opened"
},
{
"_id": 23,
"accountId": 10,
"type": "withdraw",
"amount": 134.34,
"name": "Raiding Repayment"
}
],

};

const sortAccounts = (state) => {
  let newState = {
    accounts: [...state.accounts],
    transactions: [...state.transactions],
  };
  return newState;
};

const accountReducer = (state = sortAccounts(DEFAULT_STATE), action) => {


  switch (action.type) {
    case 'ADD_ACCOUNT':
      const account = action.payload;
      account._id = generateID();
      state.accounts.push(account);

      return sortAccounts(state);

    case 'REMOVE_ACCOUNT':
      state.accounts = state.accounts.filter(char => {
        return char.id !== id;
      });
      return sortAccounts(state);

    case 'DEPOSIT':
      let id = action.payload.id;
      let transactionName = action.payload.transactionName;
      let amount = action.payload.amount;
        state.accounts = state.accounts.filter(char => {
        if(char._id != id){
          return char._id != id;
        }
        else {
          char.balance = (parseFloat(char.balance)) + (parseFloat(amount));
          let type = "deposit";
          amount = (parseFloat(amount));
          let _id = (parseInt(amount));
          let accountId = id;
          let name = transactionName;
          state.transactions.push({_id, accountId, type, amount, name});

          return char._id == id;
        }
      });

      return sortAccounts(state);

    case 'WITHDRAW':
      const id123 = action.payload.id;
      const transactionName123 = action.payload.transactionName;
      const amount123 = action.payload.amount;
        state.accounts = state.accounts.filter(char => {
        if(char._id != id123){
          return char._id != id123;
        }
        else {
          char.balance = (parseFloat(char.balance)) + (parseFloat(amount123));
                    let type = "withdraw";
                    let amount = (parseFloat(amount123));
                    let _id = (parseInt(amount123));
                    let accountId = id123;
                    let name = transactionName123;
                    state.transactions.push({_id, accountId, type, amount, name});

          return char._id == id123;
        }
      });
      return sortAccounts(state);

    default:
      return state;
  }
};

export default accountReducer;
