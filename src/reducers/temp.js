// import getTransactions from "../PostAPI";
//
// const generateID = () => {
//     return `${Date.now()}${Math.floor(Math.random() * 100)}`;
// };
// const DEFAULT_STATE = {
//     id: 0 ,
//     transactions: getTransactions,
//     transactionName: '',
//     amount: 0,
//
// };
// const sorter = (state) => {
//     return {
//         accounts: [ ...state.accounts],
//         transactions: [...state.transactions],
//     };
// };
//
// const transactionReducer = (state = DEFAULT_STATE, action) => {
//     const { id, transactionName, amount } = action.payload;
//     switch (action.type) {
//         case 'DEPOSIT':
//         {console.log(action.balance);}
//             state.accounts = state.accounts.filter(char => {
//                 if(char._id !== id){
//                     return char._id !== id;
//                 }
//                 else{
//                     char.balance = char.balance + amount;
//
//                     let type = "deposit";
//                     state.transactions.push({generateID, id, type, amount, transactionName});
//                     return char._id === id;
//                 }
//             });
//
//             return sorter(state);
//
//         case 'WITHDRAW':
//             state.accounts = state.accounts.filter(char => {
//                 if(char._id !== id){
//                     return char._id !== id;
//                 }
//                 else{
//                     char.balance = char.balance - amount;
//                     let type = "withdraw";
//                     state.characters.push({generateID, id, type, amount, transactionName});
//                     return char._id === id;
//                 }
//             });
//             return sorter(state);
//
//         default:
//             return state;
//
//     }
// };
//
// export default transactionReducer;
