import React from 'react';
import { connect } from 'react-redux';

import { deposit, withdraw } from '../actions';

class formComp extends React.Component {

    state = { transactionName: '', amount: '', deposit: "", withdraw:""}
    onFormSubmit = (event) => {

        const { transactionName, amount , deposit, withdraw} = this.state;
        const { acc_id } = this.props;
        event.preventDefault();

        if(deposit === "deposit"){
            this.props.deposit(acc_id, transactionName, amount);

        }
        else if(withdraw === "withdraw"){
            this.props.withdraw(acc_id, transactionName, amount);

        }
        this.setState({withdraw:"", deposit: "", transactionName: '', amount: 0});
    }

    render() {
        const { transactionName, amount} = this.state;
        return (
            <form  onSubmit={this.onFormSubmit}>
                <div className=""> <input required value={transactionName} name={"transactionName"} className="form-control" type={"text"} onChange={event => this.setState({transactionName: event.target.value})}/> </div>
                <div className="">  <input  required value={amount} name={"amount"} className="form-control" type={"number"} onChange={event => this.setState({amount: event.target.value})}/></div>
                <div className="">  <input type={"submit"} className="form-control btn btn-success" name={"deposit"} value={"deposit"} onClick={event => this.setState({deposit: event.target.value})}/></div>
                <div className="">  <input type={"submit"} className="form-control btn btn-danger" name={"withdraw"} value={"withdraw"} onClick={event => this.setState({withdraw: event.target.value})}/></div>
            </form>
        );
    }
}

export default connect(null, { deposit, withdraw })(formComp);

