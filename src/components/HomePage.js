import React from 'react';
import {connect} from 'react-redux';

import InitiativeItem from './InitiativeItem';
import {deposit, withdraw} from "../actions";

const HomePage = (props) => {
    const {accounts} = props
    console.log("Accounts" , accounts);
    console.log("char");

    const accountList = accounts.accounts
        .sort((a, b) => {
            return b.name - a.name;
        })
        .map((char, index) => {
            return (
                <InitiativeItem key={index} name={char.name} balance={char.balance} id={char._id}/>
            );
        });

    return (
        <div className="row accountCard">
            { accountList }
        </div>
    );
}

function mapStateToProps(state) {
    return {
        accounts: state.accounts,
        transactions: state.transactions,
    };
}

export default connect(mapStateToProps,{ deposit, withdraw } )(HomePage);
