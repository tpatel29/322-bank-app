import React from 'react';
import { connect } from 'react-redux';

import InitiativeItem from './InitiativeItem';

import { deposit, withdraw } from '../actions';

function isCurrentTurn (currentTurn, index) {
  return currentTurn === index;
}

const InitiativeList = (props) => {
  const { characters, currentTurn } = props;

  const characterList = characters
    .sort((a, b) => {
      return b.initiative - a.initiative;
    })
    .map((char, index) => {
      return (
        <InitiativeItem key={index}
          name={char.name}
          initiative={char.initiative}
          isCurrentTurn={isCurrentTurn(currentTurn, index)}
       />
      );
    });

  if(!props) return <></>;

  return (
    <div className="card">
      <div className="d-flex justify-content-between align-items-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={props.prevTurn}>
          Previous
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={props.nextTurn}>
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
    console.log(state.characters);
  return {
    characters: state.characters.characters,
    currentTurn: state.turn.current,
  };
}

export default connect(mapStateToProps, { deposit, withdraw })(InitiativeList);
