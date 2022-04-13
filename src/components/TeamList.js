import React from 'react';
import { connect } from 'react-redux';

import TeamMember from './TeamMember';

class TeamList extends React.Component {
  render() {
    const { title } = this.props;

    const characterArr = this.props[this.props.stateList];
    const characterList = characterArr.map((character, index) => {
      return (
        <TeamMember
          key={index}
          index={index}
          character={character}
        />
      );
    });
    return (
      <div className="card">
        <h3>{title} List</h3>
        <ul className="list-group">
          { characterList }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.characters.players,
    enemies: state.characters.enemies,
  };
};

export default connect(mapStateToProps)(TeamList);