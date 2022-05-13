import React from 'react';
import {connect} from 'react-redux';
import {useParams} from "react-router-dom";
import Temppp from "./Temppp.js"
import {deposit, withdraw} from "../actions";
import InitiativeItem from "./InitiativeItem"
import Scalar from "./Scalar.js"
import TransactionPageLookup from "./TransactionPageLookup.js"

const HomePage = (props) => {
    const {accounts} = props
    let { id } = useParams()
    id = parseInt(id)

   const accountScreen = accounts.accounts.map((char) => {
        console.log(char._id == id);
        if(char._id == id){
            return (
                    <div style={{width:"100%"}}>
                        <Scalar name={char.name} balance={char.balance} id={char._id}/>
                        <TransactionPageLookup name={char.name} balance={char.balance} id={char._id}/>
                    </div>
                );
        }
        return null;
    })
    return (
        <div className="row">
                { accountScreen }
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
