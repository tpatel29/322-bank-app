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
      <div>{/* Turn Controls */}</div>

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