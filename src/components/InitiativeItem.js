import React from 'react';

const InitiativeItem = (props) => {
  const { name, initiative } = props;
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      { name }
      <span className="badge badge-primary badge-pull">
        { initiative }
      </span>
    </li>
  );
};

export default InitiativeItem;
