import React from 'react';
import {connect} from 'react-redux';

import InitiativeItem from './InitiativeItem';
import {deposit, withdraw} from "../actions";

const InitiativeList123 = (props) => {
    const account = props
    console.log(account)
    const accountList = account
    .sort((a, b) => {
      return b.name - a.name;
    })
    .map((char, index) => {
        return (
            <InitiativeItem
                key={index}
                name={char.name}
                balance={char.balance}
                id={char._id}
            />
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
  };
}

export default connect(mapStateToProps,{ deposit, withdraw } )(InitiativeList123);
