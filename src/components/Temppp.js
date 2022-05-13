import React from 'react';
import {connect} from 'react-redux';

import {deposit, withdraw} from "../actions"
const Temppp = (props) => {
    console.log("int tmep");
  return (
    <div className="row accountCard">
            <h1>HELLO</h1>
    </div>
  );
}

function mapStateToProps(state) {
  return {
//     accounts: state.accounts,
  };
}

export default connect(mapStateToProps,{ deposit, withdraw } )(Temppp);
