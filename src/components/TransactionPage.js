import React from 'react';
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
import Temppp from "./Temppp.js"
import {deposit, withdraw} from "../actions";
import InitiativeItem from "./InitiativeItem"
const HomePage = (props) => {
    const {accounts} = props
    let { id } = useParams()
    id = parseInt(id)

   const accountScreen = accounts.transactions.map((char, index) => {
        console.log("hereeeee");

        return (
                    <tr>
                        <td>{char.accountId}</td>
                        <td>{char.name}</td>
                        <td>{char.amount}</td>
                        <td>{char.type}</td>

                    </tr>
            );
    })
    return (
        <div className="row">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Account ID</th>
              <th scope="col">Transaction Detail</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            { accountScreen }
          </tbody>
        </table>

        </div>
    )

}

function mapStateToProps(state) {
    return {
        accounts: state.accounts,
        transactions: state.transactions,
    };
}

export default connect(mapStateToProps,{ deposit, withdraw } )(HomePage);
