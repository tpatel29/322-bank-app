import React from 'react';
import { connect } from 'react-redux';

import { addAccount } from '../actions';

class AddAccount extends React.Component {

    state = { name: '', balance: '' }

    onFormSubmit = (event) => {
        const { name, balance } = this.state;

        event.preventDefault();
        this.props.addAccount(name, balance);
        this.setState({ name: '', balance: '' });
    }

    render() {
        const { name, balance } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}
                  style={{ padding: '0 12px 12px' }}>

                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={event => this.setState({ name: event.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label>Inital Balance</label>
                    <input
                        type="number"
                        className="form-control"
                        name="balance"
                        value={balance}
                        onChange={event => this.setState({ balance: event.target.value })}
                    />
                </div>

                <input type="submit" className="btn btn-success" value="Add Account" />

            </form>
        );
    }
}

export default connect(null, { addAccount })(AddAccount);
