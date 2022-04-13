import React from 'react';

class AddPlayer extends React.Component {

  state = { name: '', initiative: '' }

  onFormSubmit = (event) => {

  }

  render() {
    const { name, initiative } = this.state;

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
          <label>Initiative</label>
          <input
            type="text"
            className="form-control"
            name="initiative"
            value={initiative}
            onChange={event => this.setState({ initiative: event.target.value })}
          />
        </div>

        <input type="submit" className="btn btn-success" value="Add Player" />

      </form>
    );
  }
}

export default AddPlayer;
