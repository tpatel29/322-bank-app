import React from 'react';
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
import Temppp from "./Temppp.js"
import {deposit, withdraw} from "../actions";
\const HomePage = (props) => {
    const {accounts} = props
    let { id } = useParams()
    id = parseInt(id)

   const lookup = accounts.transactions.map((char, index) => {
        console.log("hereeeee");
        if(char.accountId === id){
        return (
                    <tr>
                       Hello
                    </tr>
            );
        }
    })
    return (
        <div>
        Hello
        </div>
    )

}

function mapStateToProps(state) {
    return {
        accounts: state.accounts,
        transactions: state.transactions,
    };
}

export default connect(mapStateToProps,{ deposit, withdraw } )(TransactionPageLookup);
