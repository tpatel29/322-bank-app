import React from 'react';

const InitiativeItem = (props) => {
  const { name, initiative, isCurrentTurn } = props;

  let classNames = 'list-group-item d-flex justify-content-between align-items-center';

  if (isCurrentTurn) {
    classNames = classNames.concat(' active');
  }

  return (
    <li className={classNames}>
      { name }
      <span className="badge badge-primary badge-pull">
        { initiative }
      </span>
    </li>
  );
};

export default InitiativeItem;
