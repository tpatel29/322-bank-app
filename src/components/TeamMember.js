import React from 'react';

const TeamMember = (props) => {
  return (
    <li className='list-group-item'
        key={props.key}>
      { props.character.name }
    </li>
  );
};

export default TeamMember;