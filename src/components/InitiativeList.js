import React from 'react';
import { connect } from 'react-redux';

import InitiativeItem from './InitiativeItem';

const InitiativeList = (props) => {
  const { characters } = props;

  const characterList = characters
    .sort((a, b) => {
      return b.initiative - a.initiative;
    })
    .map((char, index) => {
      return (
        <InitiativeItem key={index}
          name={char.name}
          initiative={char.initiative}
       />
      );
    });

  return (
    <div className="card">
      <div className="d-flex justify-content-between align-items-center">
        <button
          type="button"
          className="btn btn-primary">
          Previous
        </button>
        <button
          type="button"
          className="btn btn-primary">
          Next
        </button>
      </div>

      <ul className="list-group">
        { characterList }
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    characters: state.characters.characters,
  };
}

export default connect(mapStateToProps)(InitiativeList);